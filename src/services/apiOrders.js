import { PAGE_SIZE } from "../utils/constants";
import { getToday } from "../utils/helpers";
import supabase from "./supabase";

export async function createOrders(orderData, orderItems) {
  const { data: order, error: orderError } = await supabase
    .from("orders")
    .insert([orderData])
    .select()
    .single();

  if (orderError) throw new Error(orderError.message);

  const itemToInsert = orderItems.map((item) => ({
    ...item,
    orderid: order.id,
  }));

  const { error: itemsError } = await supabase
    .from("orderitems")
    .insert(itemToInsert);

  if (itemsError) throw new Error(itemsError.message);

  return order;
}

export async function getOrders(ordercode) {
  const { data: order, error: orderError } = await supabase
    .from("orders")
    .select("*")
    .eq("ordercode", ordercode)
    .single();

  if (orderError) throw new Error(orderError.message);

  const { data: items, error: itemsError } = await supabase
    .from("orderitems")
    .select("*")
    .eq("orderid", order.id);

  if (itemsError) throw new Error(itemsError.message);

  return { order, items };
}

export async function getAllOrders({ queryDate, page }) {
  let query = supabase
    .from("orders")
    .select(
      `
    id,
    created_at,
    userid,
    restaurantid,
    restaurantname,
    ordercode,
    total_amount,
    status,
    estimateddelivery,
    orderitems:orderitems(
    id,
    orderid,
    menuitemid,
    namesnapshot,
    pricesnapshot,
    quantity,
    totalprice
    )`,
      { count: "exact" }
    )
    .order("created_at", { ascending: false });

  if (queryDate) {
    query = query.gte("created_at", queryDate).lte("created_at", getToday());
  }

  if (page && page !== "all") {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) throw new Error(error.message);

  return { data, count };
}

export async function updateStatus({ id, status }) {
  const { data, error } = await supabase
    .from("orders")
    .update({ status })
    .eq("id", id)
    .select()
    .single();

  if (error) throw new Error(error.message);

  return data;
}
