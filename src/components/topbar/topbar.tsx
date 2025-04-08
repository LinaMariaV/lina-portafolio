import { useState } from "react";
import Image from "next/image";
import logolv from "../../../public/lv-logo-violet.png";
import "./topbar.css";


interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: "about", label: "About" },
  { href: "skills", label: "Skills" },
  { href: "projects", label: "Projects" },
  { href: "mailto:linavilla1499@gmail.com", label: "Contact" },
];

export default function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const ToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavigation = (href: string): void => {
    if (href.startsWith('mailto:')) {
      window.location.href = href;
    } else {
      document.getElementById(href)?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="bg-black text-white w-full p-4 drop-shadow-2xl sticky top-0 z-10">
      <nav className="flex items-center justify-between">
        <div className="mx-3">
          <Image width={45} height={45} src={logolv} alt="Lina Villalba" />
        </div>

        <div className="hidden sm:flex space-x-8 items-center">
          
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              className="nav-item cursor-pointer " 
              onClick={() => handleNavigation(href)}
            >
              {label}
            </a>
          ))}

          <a
            className="nav-item text-indigo-500 font-bold py-2 px-4 rounded cursor-pointer"
            href="/CV-LINA.pdf"
            target="_blank"
            rel="noreferrer"
          >
            View CV
          </a>
        </div>

        <button
          className="sm:hidden text-orange-50"
          onClick={ToggleMenu}
          aria-label="Toggle menu"
        >
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

      {/* Menú móvil */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } sm:hidden w-full bg-black text-white p-4 space-y-4 text-center transition-all ease-in-out`}
      >
        {navLinks.map(({ href, label }) => (
          <a
            key={href}
            className="nav-item block  cursor-pointer"
            onClick={() => {
              handleNavigation(href);
              setMenuOpen(false);
            }}
          >
            {label}
          </a>
        ))}
        <a
          className="nav-item block text-indigo-500 font-bold py-2 px-4 rounded"
          href="/CV-LINA.pdf"
          download
          
          rel="noreferrer"
        >
          View CV
        </a>
      </div>
    </header>
  );
}
