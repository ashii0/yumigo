import { useState } from "react";
import { GoHistory } from "react-icons/go";
import { NavLink } from "react-router-dom";
import useOutsideClick from "../hooks/useOutsideClick";

function HistoryMenu({ onSelect }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const dropdownRef = useOutsideClick(close);

  return (
    <li className="relative">
      <button
        onClick={(onSelect, () => setOpen(!open))}
        className="flex items-center gap-1 hover:text-akaccent-600 transition-all"
      >
        <GoHistory />
        <span>History</span>
      </button>

      {open && (
        <ul
          className="absolute left-0 mt-2 w-70 bg-white shadow-xl rounded-xl border border-gray-200 py-2 z-50"
          ref={dropdownRef}
        >
          <li>
            <NavLink
              to="/orderhistory"
              className="block px-4 py-2 hover:bg-gray-100 dark:text-akcharcoal transition-all "
              // onClick={(onSelect, () => setOpen(false))}
              onClick={() => {
                onSelect();
                setOpen(false);
              }}
            >
              Order History
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/tablereservationhistory"
              className="block px-4 py-2 hover:bg-gray-100 dark:text-akcharcoal transition-all"
              onClick={() => {
                onSelect();
                setOpen(false);
              }}
            >
              Table Reservation History
            </NavLink>
          </li>
        </ul>
      )}
    </li>
  );
}

export default HistoryMenu;

{
  /* const navLink_ClassName =
    "flex items-center gap-1 hover:text-akaccent-600 transition-all";
    
    <li>
  <NavLink className={navLink_ClassName} to="/cart">
    <GoHistory />
    <span>History</span>
  </NavLink>
</li>; */
}
