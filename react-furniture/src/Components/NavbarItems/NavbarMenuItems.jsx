import React from "react";
import NavbarDropdown from "./NavbarDropDown.jsx";

const menuItems = [
  {
    title: "SHOW ALL",
    dropdownItems: [
      {
        heading: "Living Room",
        items: ["Living Room Sets", "Sofas", "Loveseats"],
      },
      {
        heading: "Dining Room",
        items: ["Dining Room Sets", "Dining Chairs", "Dining Tables"],
      },
      {
        heading: "Bedroom",
        items: ["Bedroom Sets", "Beds", "Storage Beds (Baza)"],
      },
      {
        heading: "Mattresses",
        items: [
          "Soft & Plush Mattresses",
          "Medium Mattresses",
          "Firm Mattresses",
        ],
      },
      {
        heading: "Rugs",
        items: ["Hallway Runners", "5' x 8' Medium Rugs", "7' x 9' Large Rugs"],
      },
    ],
  },
  {
    title: "LIVING ROOM",
    dropdownItems: [
      "Living Room Sets",
      "Sofas",
      "Loveseats",
      // "Accent Chairs",
      // "Sectionals",
      // "Recliners",
      // "Pull Out Couches",
      // "Sleeper Sofas",
      // "Ottomans",
      // "Coffee Tables",
      // "Console Tables",
      // "End & Side Tables",
      // "Nesting Tables",
      // "TV Stands",
      // "Accent Cabinets",
      // "Fireplaces",
    ],
  },
  {
    title: "DINING ROOM",
    dropdownItems: [
      "Dining Room Sets",
      "Dining Chairs",
      "Dining Tables",
      // "Bar Stools",
      // "Benches",
      // "Buffets & Sideboards",
      // "Curio & China",
      // "Kitchen Corner (Nook)",
    ],
  },
  {
    title: "BEDROOM",
    dropdownItems: [
      "Bedroom Sets",
      "Beds",
      "Storage Beds (Baza)",
      // "Dressers & Mirrors",
      // "Chests",
      // "Nightstands",
      // "Wardrobes",
      // "Makeup Vanities",
    ],
  },
  {
    title: "MATTRESSES",
    dropdownItems: [
      "Soft & Plush Mattresses",
      "Medium Mattresses",
      "Firm Mattresses",
      // "Folding Beds",
      // "High Risers",
    ],
  },
  {
    title: "RUGS",
    dropdownItems: [
      "Hallway Runners",
      "5' x 8' Medium Rugs",
      "7' x 9' Large Rugs",
      // "Extra Large Rugs",
    ],
  },
];

const NavbarMenuItems = () => {
  return (
    <div className="relative">
      <ul className="list-none flex justify-around items-center text-white border-t-[0.05px] border-neutral-700 p-1">
        {menuItems.map((menuItem, index) => (
          <NavbarDropdown
            key={index}
            title={menuItem.title}
            dropdownItems={menuItem.dropdownItems}
          />
        ))}
      </ul>
    </div>
  );
};

export default NavbarMenuItems;
