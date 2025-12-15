import { PAGE_SIZE } from "../utils/constants";
import { getToday } from "../utils/helpers";
import supabase from "./supabase";

export async function getBookedSlots(restaurantId, reservationDate) {
  const restaurantIdNum = Number(restaurantId);

  const { data: tables, error: tableError } = await supabase
    .from("restauranttables")
    .select("id")
    .eq("restaurantid", restaurantIdNum);

  if (tableError) throw tableError;

  const totalTables = tables.length;

  const { data: bookings, error } = await supabase
    .from("tablereservations")
    .select("slotid")
    .eq("restaurantid", restaurantIdNum)
    .eq("reservationdate", reservationDate);

  if (error) throw error;

  const slotCount = {};

  bookings.forEach((b) => {
    slotCount[b.slotid] = (slotCount[b.slotid] || 0) + 1;
  });

  const fullyBookedSlots = Object.entries(slotCount)
    .filter(([slotid, count]) => count >= totalTables)
    .map(([slotid]) => Number(slotid));

  return fullyBookedSlots;
}

export async function getBookedTables(restaurantId, reservationDate, slotId) {
  const restaurantIdNum = Number(restaurantId);

  const { data, error } = await supabase
    .from("tablereservations")
    .select("tableid")
    .eq("restaurantid", restaurantIdNum)
    .eq("reservationdate", reservationDate)
    .eq("slotid", slotId);

  if (error) {
    console.error(error);
    throw new Error("Could not load booked tables");
  }

  return data.map((r) => r.tableid);
}

export async function reserveTable({
  restaurantId,
  tableId,
  slotId,
  reservationDate,
  userId,
  reservationcode,
  status,
}) {
  const { data, error } = await supabase
    .from("tablereservations")
    .insert([
      {
        restaurantid: restaurantId,
        tableid: tableId,
        slotid: slotId,
        reservationdate: reservationDate,
        userid: userId,
        status,
        reservationcode,
      },
    ])
    .select();

  if (error) {
    console.error("Supabase reservation error:", error);
    throw error;
  }

  return data[0];
}

export async function getReservations(reservationcode) {
  const { data, error } = await supabase
    .from("tablereservations")
    .select(
      `*,
      restaurants:restaurantid(id, name), 
      slots:slotid(id, slotlabel), 
      restauranttables:tableid(id, 
      tablenumber, capacity)`
    )
    .eq("reservationcode", reservationcode)
    .maybeSingle();
  // .select(
  //   `id,
  //   reservationdate,
  //   reservationcode,
  //   status,
  //   restaurants:restaurantid(id, name),
  //   slots:slotid(id, slotlabel),
  //   restauranttables:tableid(id,
  //   tablenumber, capacity)`
  // )

  if (error) throw error;

  return data;
}

async function syncExpiredReservations() {
  const { error } = await supabase.rpc("complete_expired_reservations");
  if (error) throw new Error(error.message);
}

export async function getAllReservations({ queryDate, sortBy, page }) {
  await syncExpiredReservations();
  let query = supabase.from("tablereservations").select(
    `id, 
      reservationdate, 
      reservationcode,
      status,
      restaurants:restaurantid(id, name), 
      slots:slotid(id, slotstart, slotend, slotlabel), 
      restauranttables:tableid(id, 
      tablenumber, capacity)`,
    { count: "exact" }
  );
  // .order("created_at", { ascending: false });

  if (queryDate) {
    query = query
      .gte("reservationdate", queryDate)
      .lte("reservationdate", getToday());
  }

  if (sortBy) {
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === "asc",
    });
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

export async function updateCancelReservation(reservationId) {
  const { data: cancelReservation, error } = await supabase
    .from("tablereservations")
    .update({ status: "Cancelled" })
    .eq("id", reservationId);

  if (error) throw new Error(error.message);

  return cancelReservation;
}
