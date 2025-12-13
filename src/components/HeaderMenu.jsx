import { HiOutlineUser } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import DarkModeToggle from "../features/darklightmode/DarkModeToggle";
import { useUser } from "../features/user/login/useUser";
import Logout from "../features/user/logout/Logout";

function HeaderMenu() {
  const { fullname, avatar } = useUser();

  return (
    <ul className="flex gap-3 items-center">
      <li className="flex items-center gap-1 py-0.5">
        <img
          className="block w-8 sm:w-14 aspect-square object-cover object-center rounded-full outline outline-gray-100 dark:outline-akslatebluegray "
          src={avatar || "default-user.jpg"}
          alt={fullname}
        />
        <span className="hidden sm:block text-akaccent-600 font-macondo font-bold sm:text-lg">
          {fullname || "Guest"}
        </span>
      </li>

      <li>
        <NavLink to="/user">
          <HiOutlineUser size={24} />
        </NavLink>
      </li>
      <li>
        <DarkModeToggle />
      </li>
      <li>
        <Logout />
      </li>
    </ul>
  );
}

export default HeaderMenu;

{
  /* <nav className="relative w-full">
       Kebap Menu Button - EllipseVertical
      <div className="flex justify-end">
        <button
          className="sm:hidden p-2 text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiXMark /> : <HiEllipsisVertical />}
        </button> 
      </div>

      </nav>*/
}
