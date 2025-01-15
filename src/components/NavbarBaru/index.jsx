"use client"
import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchBar from "../SearchBar";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";
import { useState, useEffect } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const home = "/";
  const service = "/service";
  const about = "/about";
  const karyawan = "/karyawan";
  const contact = "/contact";
  const [menu, setMenu] = useState(true);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  const NavbarMobile = () => {
    return (
      <header className="w-full bg-gray-800 text-white">
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="/" className="text-lg font-bold">
            MyLogo
          </Link>
          <button className="text-2xl focus:outline-none md:hidden" onClick={toggleMenu}>
            {menuOpen ? <MdOutlineClose /> : <RxHamburgerMenu />}
          </button>
        </div>

        {/* Menu Items */}
        <nav
          className={`absolute top-0 left-0 w-full h-screen bg-gray-900 text-white transform transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } md:static md:translate-x-0 md:flex md:h-auto md:bg-transparent`}
        >
          <ul className="flex flex-col items-center justify-center h-full space-y-6 md:flex-row md:space-y-0 md:space-x-6">
            <li>
              <Link href="/" className="block px-4 py-2 text-xl font-medium hover:bg-gray-700 md:hover:bg-transparent" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="block px-4 py-2 text-xl font-medium hover:bg-gray-700 md:hover:bg-transparent" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="block px-4 py-2 text-xl font-medium hover:bg-gray-700 md:hover:bg-transparent" onClick={() => setMenuOpen(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block px-4 py-2 text-xl font-medium hover:bg-gray-700 md:hover:bg-transparent" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  };

  return (
    <nav>
      <div className={`flex  px-3 items-center `}>
        <ul className=" grid grid-cols-5 lg:flex h-fit">
          <li className={`transition-all text-center duration-300 ease-in-out ${pathname === home ? "bg-main-primary" : "hover:bg-main-accent"}`}>
            <a href={home} className=" px-5 text-ml text-textColor-primary font-semibold block py-3 ">
              Home
            </a>
          </li>
          <li className={`transition-all text-center duration-300 ease-in-out ${pathname === about ? "bg-main-primary" : "hover:bg-main-accent"}`}>
            <a href={about} className=" px-5 text-ml text-textColor-primary font-semibold block py-3">
              About
            </a>
          </li>
          <li className={`transition-all text-center duration-300 ease-in-out ${pathname === contact ? "bg-main-primary" : "hover:bg-main-accent"}`}>
            <a href={contact} className="px-5 text-ml text-textColor-primary font-semibold block py-3">
              Contact
            </a>
          </li>
          <li className={`transition-all text-center duration-300 ease-in-out ${pathname === karyawan ? "bg-main-primary" : "hover:bg-main-accent"}`}>
            <a href={karyawan} className=" px-5 text-ml text-textColor-primary font-semibold block py-3">
              Karyawan
            </a>
          </li>
          <li className={`transition-all text-center duration-300 ease-in-out ${pathname === service ? "bg-main-primary" : "hover:bg-main-accent"}`}>
            <a href={service} className=" px-5 text-ml text-textColor-primary font-semibold block py-3">
              Service
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
