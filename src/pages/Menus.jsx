import Spinner from "../components/Spinner";
import { useMenus } from "../features/menus/useMenus";
import MenuList from "../features/menus/MenuList";
import ViewCartButton from "../features/restaurants/ViewCartButton";

function Menus() {
  const { isPending, menus } = useMenus();

  const grouped = menus?.reduce((acc, menu) => {
    const category = menu?.category?.trim() || "Uncategorized";
    if (!acc[category]) acc[category] = [];
    acc[category].push(menu);
    return acc;
  }, {});

  if (isPending) return <Spinner />;

  return (
    <>
      {Object.entries(grouped).map(([category, menus]) => (
        <section key={category}>
          <h2 className="text-4xl font-bold mb-4 mt-4 py-4 font-macondo">
            {category}
          </h2>
          <div>
            <ul className="grid sm:grid-cols-2">
              {menus.map((menu) => (
                <MenuList key={menu.id} menu={menu} />
              ))}
            </ul>
          </div>
        </section>
      ))}

      <ViewCartButton />
    </>
  );
}

export default Menus;
