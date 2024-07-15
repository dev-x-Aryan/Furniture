import React from "react";

const NavbarMenuItems = () => {
  const content = (
    <div>
      <ul className="list-none flex justify-around items-center text-white  border-t-[0.05px] border-neutral-700 p-1">
        <li className="cursor-pointer w-full text-center hover:bg-neutral-700  p-2 hover:rounded-xl">
          SHOP ALL
        </li>
        <li className="cursor-pointer w-full text-center hover:bg-neutral-700  p-2 hover:rounded-xl">
          WHAT'S NEW
        </li>
        <li className="cursor-pointer w-full text-center hover:bg-neutral-700  p-2 hover:rounded-xl">
          LIVING ROOM
        </li>
        <li className="cursor-pointer w-full text-center hover:bg-neutral-700  p-2 hover:rounded-xl">
          DINING ROOM
        </li>
        <li className="cursor-pointer w-full text-center hover:bg-neutral-700  p-2 hover:rounded-xl">
          BEDROOM
        </li>
      </ul>
    </div>
  );
  return content;
};

export default NavbarMenuItems;
