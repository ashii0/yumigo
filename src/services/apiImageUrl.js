import supabase from "./supabase";

export async function getImageUrl() {
  const { data: folders, error: folderErr } = await supabase.storage
    .from("menus_images")
    .list("", {
      limit: 600,
      offset: 0,
      sortBy: { column: "name", order: "asc" },
    });

  if (folderErr) {
    console.error(folderErr);
    return [];
  }

  const allData = [];

  for (const folder of folders) {
    if (!folder.name) continue;

    const { data: files } = await supabase.storage
      .from("menus_images")
      .list(folder.name, {
        limit: 600,
        offset: 0,
        sortBy: { column: "name", order: "asc" },
      });

    if (!files) continue;

    const urls = files.map(
      (file) =>
        supabase.storage
          .from("menus_images")
          .getPublicUrl(`${folder.name}/${file.name}`).data.publicUrl
    );

    allData.push({
      folder: folder.name,
      images: urls,
    });
  }

  console.log(allData);
  return allData;
}
