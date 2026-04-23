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
  { href: "contact-cta", label: "Contact" },
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
    <header className="bg-white dark:bg-black text-black dark:text-white w-full px-6 py-3 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-10 backdrop-blur-sm bg-opacity-95 dark:bg-opacity-95 z-20">
      <nav className="flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex-shrink-0 opacity-80 hover:opacity-100 transition-opacity">
          <Image width={40} height={40} src={logolv} alt="Lina Villalba" />
        </div>

        <div className="hidden sm:flex space-x-10 items-center">

          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              className="nav-item cursor-pointer text-gray-700 dark:text-gray-300"
              onClick={() => handleNavigation(href)}
            >
              {label}
            </a>
          ))}

          <a
            className="nav-item px-4 py-2 text-sm font-medium rounded-full bg-black dark:bg-white text-white dark:text-black hover:opacity-80 transition-opacity"
            href="/cv_linamv.pdf"
            target="_blank"
            rel="noreferrer"
          >
            View CV
          </a>
        </div>

        <button
          className="sm:hidden text-gray-700 dark:text-white"
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

      {/* Mobile menu */}
      <div
        className={`${menuOpen ? "block" : "hidden"
          } sm:hidden w-full bg-white dark:bg-black text-gray-700 dark:text-white p-4 space-y-3 text-center transition-all ease-in-out border-t border-gray-200 dark:border-gray-800`}
      >
        {navLinks.map(({ href, label }) => (
          <a
            key={href}
            className="nav-item block cursor-pointer text-sm py-2"
            onClick={() => {
              handleNavigation(href);
              setMenuOpen(false);
            }}
          >
            {label}
          </a>
        ))}
        <a
          className="nav-item block text-sm font-medium py-2 px-4 rounded-full bg-black dark:bg-white text-white dark:text-black inline-block mx-auto"
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
