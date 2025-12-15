function Button({ children, onClick }) {
  return (
    <button
      className="border-none 2xl:text-xl text-lg md:text-md sm:text-sm sm:p-3 p-1 rounded-full bg-akdarkbrown-3 text-akbeige dark:bg-gray-700 dark:text-akaccent-100 hover:bg-akaccent-600 hover:text-akprimary-900 transition-all"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
