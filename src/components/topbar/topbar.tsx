"use client";

import { useState } from "react";
import Image from "next/image";
import logolv from "../../../public/lv-logo-violet.png";

export default function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-black text-white w-full p-4 drop-shadow-2xl absolute z-1 ">
      <nav className="flex items-center justify-between">
        <div className="mx-3">
          <Image width={45} height={45} src={logolv} alt="Lina Villalba" />
        </div>

        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } sm:flex space-x-8 items-center transition-all duration-300 ease-in-out`}
        >
          <a href="#about" className="hover:text-orange-50">
            About{" "}
          </a>
          <a href="#projects" className="hover:text-orange-50">
            Projects
          </a>
          <a href="#contact" className="hover:text-orange-50">
            Contact
          </a>

          <button className="text-indigo-500 font-bold py-2 px-4 rounded">
            View CV
          </button>
        </div>
        <button className="sm:hidden text-orange-50" onClick={toggleMenu}>
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
