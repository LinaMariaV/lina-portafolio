"use client";

import { useState } from "react";
import Image from "next/image";
import logolv from "../../../public/lv-logo-violet.png";

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: "about", label: "About" },
  { href: "skills", label: "Skills" },
  { href: "projects", label: "Projects" },
  { href: "contact", label: "Contact" },
];

export default function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const ToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const ScrollTo = (id: string): void => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="bg-black text-white w-full p-4 drop-shadow-2xl z-1 sticky top-0">
      <nav className="flex items-center justify-between">
        <div className="mx-3">
          <Image width={45} height={45} src={logolv} alt="Lina Villalba" />
        </div>

        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } sm:flex space-x-8 items-center transition-all duration-300 ease-in-out`}
        >
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              className="hover:text-orange-50 cursor-pointer"
              onClick={() => ScrollTo(href)}
            >
              {label}
            </a>
          ))}

          <button className="text-indigo-500 font-bold py-2 px-4 rounded">
            View CV
          </button>
        </div>

        <button className="sm:hidden text-orange-50" onClick={ToggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
}
