import { FaHeadphones } from "react-icons/fa";
import {
  HiHome,
  HiOutlineBuildingStorefront,
  HiOutlineInformationCircle,
  HiShoppingCart,
} from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import HistoryMenu from "./HistoryMenu";

const navLink_ClassName =
  "flex items-center gap-1 hover:text-akaccent-600 transition-all";
function Navs() {
  return (
    <>
      <li>
        <NavLink className={navLink_ClassName} to="/dashboard">
          <HiHome />
          <span>Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink className={navLink_ClassName} to="/about">
          <HiOutlineInformationCircle />
          <span>About</span>
        </NavLink>
      </li>
      <li>
        <NavLink className={navLink_ClassName} to="/restaurants">
          <HiOutlineBuildingStorefront />
          <span>Restaurants</span>
        </NavLink>
      </li>
      <li>
        <NavLink className={navLink_ClassName} to="/cart">
          <HiShoppingCart />
          <span>Cart</span>
        </NavLink>
      </li>
      <HistoryMenu />
      <li>
        <NavLink className={navLink_ClassName} to="/contact">
          <FaHeadphones />
          <span>Contact</span>
          <span>us</span>
        </NavLink>
      </li>
    </>
  );
}

export default Navs;
