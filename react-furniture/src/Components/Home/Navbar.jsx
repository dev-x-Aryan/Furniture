import React from "react";
import { BiCart, BiSearch, BiUser } from "react-icons/bi";
import NavbarMenuItems from "../NavbarItems/NavbarMenuItems";

const Navbar = () => {
  const content = (
    <div className="bg-black min-h-[5rem] w-full ">
      <div className=" text-white flex justify-between ">
        <div className="w-[60%]  flex justify-between p-2 items-center gap-3 ">
          <div>
            <img src="src\assets\img.avif" alt="#" className="pl-3  pb-3" />
          </div>
          <div className="w-[60%] flex items-center gap-2 bg-neutral-500 rounded-2xl p-2">
            <input
              type="text"
              className=" bg-transparent  outline-none border-none text-black w-full"
              placeholder="Search..."
            />
            <BiSearch className=" cursor-pointer hover:bg-slate-900 rounded-2xl hover:text-neutral-400 h-auto w-auto p-2 text-black border border-black hover:border-slate-900" />
          </div>
        </div>
        <div className="flex gap-3  items-center w-[40%] justify-end">
          <div className="inline-flex gap-2 items-center border p-2 rounded-sm mr-2 cursor-pointer hover:bg-slate-700 hover:text-wrap">
            <BiUser />
            ACCOUNTS
          </div>
          <div className="inline-flex gap-2 items-center border p-2 rounded-sm mr-2 cursor-pointer hover:bg-slate-700">
            <BiCart />
            CART
          </div>
        </div>
      </div>

      <div>
        <NavbarMenuItems />
      </div>
    </div>
  );
  return content;
};

export default Navbar;
