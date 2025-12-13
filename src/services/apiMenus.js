import supabase from "./supabase";

export async function getMenus(restaurantId) {
  //   console.log(
  //     "🍽️ Fetching menus for restaurantId:",
  //     restaurantId,
  //     typeof restaurantId
  //   );
  const { data, error } = await supabase
    .from("menus")
    .select("*")
    .eq("restaurantid", String(restaurantId));

  if (error) {
    console.error(error);
    throw new Error("Menus could not be loaded");
  }
  //   console.log(data);
  return data;
}
