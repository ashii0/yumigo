import { useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import Navs from "./Navs";
import useOutsideClick from "../hooks/useOutsideClick";

function MainNav() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);
  const dropdownRef = useOutsideClick(close);

  return (
    <nav className="relative w-full">
      {/* Humburger Button */}
      <button
        className="md:hidden p-2 text-3xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <HiXMark /> : <HiBars3 />}
      </button>

      {/* Menu on Large screens */}
      <ul className="hidden md:flex flex-row gap-7 ">
        <Navs />
      </ul>

      {/* Mobile dropdown */}
      {isOpen && (
        <ul
          className="absolute left-0 top-12 bg-white dark:bg-akcharcoal w-40 flex flex-col gap-4 p-4 shadow-xl md:hidden z-50 rounded-lg"
          // className="absolute left-0 top-12 bg-white dark:bg-akcharcoal w-full flex flex-col gap-4 p-4 shadow-xl md:hidden z-50 rounded-lg"
          ref={dropdownRef}
        >
          <Navs onSelect={close} />
        </ul>
      )}
    </nav>
  );
}

export default MainNav;

{
  /* <li>
        <NavLink className={navLink_ClassName} to="/cart">
          <HiShoppingCart />
          <span>History</span>
        </NavLink>
      </li> */
}
