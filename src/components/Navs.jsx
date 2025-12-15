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

// const navLink_ClassName =
//   "flex items-center justify-center gap-1 text-center hover:text-akaccent-600 transition-all";
function Navs({ onSelect }) {
  return (
    <>
      <li>
        <NavLink
          className={navLink_ClassName}
          to="/dashboard"
          onClick={onSelect}
        >
          <HiHome />
          <span>Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink className={navLink_ClassName} to="/about" onClick={onSelect}>
          <HiOutlineInformationCircle />
          <span>About</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          className={navLink_ClassName}
          to="/restaurants"
          onClick={onSelect}
        >
          <HiOutlineBuildingStorefront />
          <span>Restaurants</span>
        </NavLink>
      </li>
      <li>
        <NavLink className={navLink_ClassName} to="/cart" onClick={onSelect}>
          <HiShoppingCart />
          <span>Cart</span>
        </NavLink>
      </li>
      <HistoryMenu onSelect={onSelect} />
      <li>
        <NavLink className={navLink_ClassName} to="/contact" onClick={onSelect}>
          <FaHeadphones />
          <span>Contact</span>
          <span>us</span>
        </NavLink>
      </li>
    </>
  );
}

export default Navs;
