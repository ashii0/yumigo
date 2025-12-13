import { Outlet, useLocation } from "react-router-dom";
import BackButton from "../components/BackButton";
import useAutoStatusUpdate from "../hooks/useAutoStatusUpdate";
import Header from "../ui/Header";

function AppLayout() {
  useAutoStatusUpdate();
  const location = useLocation();
  const ALLOW_BACK = ["/restaurants", "/cart", "/order"];
  const NOTALLOWED_BACK =
    location.pathname.startsWith("/orderconfirmation") ||
    location.pathname.startsWith("/orderhistory");

  const showBackButton =
    // !location.pathname.startsWith("/orderconfirmation") &&
    !NOTALLOWED_BACK &&
    ALLOW_BACK.some((show) => location.pathname.startsWith(show));

  return (
    <div className="grid grid-rows-[auto_1fr] h-dvh">
      {/* bg-linear-to-br from-[#FFE8CD] via-[#F5D2A4] to-[#D4A056] dark:from-[#141C24] dark:via-[#2A3540] dark:to-[#D4A056]/80 */}
      <div>
        <Header />
        {showBackButton && <BackButton />}
      </div>

      <main className="px-16 py-4 overflow-scroll">
        <div className="max-w-480 m-[0_auto] flex flex-col gap-13">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;

// const showBackButton =
//     location.pathname.startsWith("/restaurants") ||
//     location.pathname.startsWith("/cart") ||
//     location.pathname.startsWith("/order");
