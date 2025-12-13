import HeaderMenu from "../components/HeaderMenu";
import Logo from "../components/Logo";
import MainNav from "../components/MainNav";

function Header() {
  return (
    <header className="border-b px-16 py-[0.4rem] flex gap-5 items-center">
      {/* p-[0.4rem_4.8rem] */}
      <div className="flex flex-1 justify-start shrink-0 w-[150px]">
        <Logo />
      </div>
      <div className="flex flex-2 justify-middle">
        <MainNav />
      </div>
      <div className="flex flex-3 justify-end">
        <HeaderMenu />
      </div>
    </header>
  );
}

export default Header;
