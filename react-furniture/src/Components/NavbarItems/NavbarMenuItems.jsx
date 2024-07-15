import NavbarDropDown from "./NavbarDropDown";

const NavbarMenuItems = () => {
  return (
    <div className="relative">
      <ul className="list-none flex justify-around items-center text-white border-t-[0.05px] border-neutral-700 p-1 ">
        <NavbarDropDown />
        <NavbarDropDown />
        <NavbarDropDown />
        <NavbarDropDown />
      </ul>
    </div>
  );
};

export default NavbarMenuItems;
