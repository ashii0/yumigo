import { HiMoon, HiSun } from "react-icons/hi2";
import { useDarkMode } from "../../context/DarkModeContext";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <button onClick={toggleDarkMode}>
      {/* {isDarkMode ? <HiOutlineSun size={24} /> : <HiOutlineMoon size={24} />} */}
      {isDarkMode ? <HiSun size={24} /> : <HiMoon size={24} />}
    </button>
  );
}

export default DarkModeToggle;
