import supabase from "./supabase";

export async function getTables(restaurantId) {
  const restaurantIdNum = Number(restaurantId);
  const { data, error } = await supabase
    .from("restauranttables")
    .select("*")
    .eq("restaurantid", restaurantIdNum)
    .order("tablenumber", { ascending: true });

  if (error) {
    console.error(error);
    throw new Error("Tables could not be loaded");
  }

  return data;
}
