import Link from "next/link";
import React from "react";

const links = [
  {
    label: "Chat",
    href: "/chat",
  },
  {
    label: "Profile",
    href: "/profile",
  },
  {
    label: "New Tours",
    href: "/tours/new-tour",
  },
  {
    label: "Tours",
    href: "/tours",
  },
];

const NavLinks = () => {
  return (
    <ul className="menu text-base-content">
      {links.map((link) => {
        return (
          <li key={link.label}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
