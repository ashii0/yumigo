import { useDarkMode } from "../context/DarkModeContext";

function Logo() {
  const { isDarkMode } = useDarkMode();
  const src = isDarkMode ? "/yumigo-dark.png" : "/yumigo-dark.png";
  return (
    <div className="text-center">
      <img className="w-20 sm:w-28 md:w-36 lg:w-44 h-14" src={src} alt="Logo" />
    </div>
  );
}

export default Logo;
