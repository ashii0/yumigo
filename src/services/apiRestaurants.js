import supabase from "./supabase";

export async function getRestaurants() {
  const { data, error } = await supabase.from("restaurants").select("*");

  if (error) {
    console.error(error);
    throw new Error("Restaurants could not be loaded");
  }

  //   console.log("Fetched Restaurants:", data);
  return data;
}

export async function getRestaurant(id) {
  const { data, error } = await supabase
    .from("restaurants")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Restaurant not found");
  }

  return data;
}
