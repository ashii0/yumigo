import supabase from "./supabase";

export async function getSlots(restaurantId) {
  const restaurantIdNum = Number(restaurantId);

  const { data, error } = await supabase
    .from("restaurantslots")
    .select("*")
    .eq("restaurantid", restaurantIdNum)
    .order("slotstart", { ascending: true });

  if (error) {
    console.error(error);
    throw new Error("Slots could not be loaded");
  }

  return data;
}
