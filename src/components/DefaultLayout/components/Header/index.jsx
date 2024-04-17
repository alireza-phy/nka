import DesktopMenu from "@/components/DefaultLayout/components/Header/desktopMenu";

const Header = () => {
  return (
    <header className="fixed z-[2000] bg-black w-full">
      <div className="flex items-center justify-between h-15 p-4 bg-[#262a2b]">
        <span className="text-white">هدر بالا</span>
      </div>
      <DesktopMenu />
    </header>
  );
};

export default Header;
