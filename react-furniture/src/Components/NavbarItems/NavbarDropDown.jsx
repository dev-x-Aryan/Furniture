import { useState } from "react";
const NavbarDropDown = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  const content = (
    <li
      className="cursor-pointer w-full text-center p-2 hover:bg-neutral-700 hover:rounded-xl relative "
      onMouseEnter={toggleDropdown}
      onMouseLeave={closeDropdown}
    >
      SHOP ALL
      {showDropdown && (
        <div className="absolute bg-white shadow-xl mt-3 rounded-xl w-full z-20 ">
          {/* Dropdown Content */}
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:rounded-xl"
          >
            Option 1
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:rounded-xl"
          >
            Option 2
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:rounded-xl"
          >
            Option 3
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:rounded-xl"
          >
            Option 3
          </a>{" "}
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:rounded-xl"
          >
            Option 3
          </a>{" "}
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:rounded-xl"
          >
            Option 3
          </a>
        </div>
      )}
    </li>
  );
  return content;
};

export default NavbarDropDown;
