"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchBar from "../SearchBar";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";
import { useState, useEffect, useRef } from "react";
import Logo from "./logo";

const Navbar = () => {
  const pathname = usePathname();
  const home = "/";
  const service = "/service";
  const about = "/about";
  const karyawan = "/karyawan";
  const contact = "/contact";
  const [menu, setMenu] = useState(true);
  const [isBlurred, setIsBlurred] = useState(false);
  const navMobile = useRef();
  const [dropDown, setDropDown] = useState(false);

  const handleClickOutside = (event) => {
    // Periksa apakah klik terjadi di luar elemen yang dirujuk oleh ref
    if (navMobile.current && !navMobile.current.contains(event.target)) {
      console.log("tess");
      setMenu(true);
      setDropDown(false);
    }
  };

  useEffect(() => {
    // Tambahkan event listener pada document
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("wheel", handleClickOutside);

    return () => {
      // Bersihkan event listener saat komponen dilepas
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("wheel", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("navbar"); // Ganti dengan ID elemen Anda
      if (element) {
        const { top } = element.getBoundingClientRect();
        const apa = top.top;
        if (top <= 0) {
          setIsBlurred(true);
          console.log("blooeee");
        } else {
          setIsBlurred(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const IsiLi = () => {
    return (
      <ul className="grid grid-cols-1 gap-2 text-sm px-2 md:gap-0 md:text-base md:px-0 md:grid-cols-5 md:h-fit ">
        <li
          className={`relative transition-all duration-300 ease-in-out ${
            pathname === home ? "bg-main-primary " : "hover:bg-main-accent  after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-main-primary hover:after:w-full after:transition-all after:duration-300"
          }`}
        >
          <a href={home} className="px-5 text-ml text-textColor-primary font-semibold block py-2 md:py-3">
            Home
          </a>
        </li>
        <li
          className={`relative transition-all duration-300 ease-in-out ${
            pathname === about ? "bg-main-primary" : "hover:bg-main-accent  after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-main-primary hover:after:w-full after:transition-all after:duration-300"
          }`}
        >
          <a href={about} className="px-5 text-ml text-textColor-primary font-semibold block py-2 md:py-3">
            About
          </a>
        </li>
        <li
          className={`relative transition-all duration-300 ease-in-out ${
            pathname === contact ? "bg-main-primary" : "hover:bg-main-accent  after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-main-primary hover:after:w-full after:transition-all after:duration-300"
          }`}
        >
          <a href={contact} className="px-5 text-ml text-textColor-primary font-semibold block py-2 md:py-3">
            Contact
          </a>
        </li>
        <li
          className={`relative transition-all duration-300 ease-in-out ${
            pathname === karyawan ? "bg-main-primary" : "hover:bg-main-accent  after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-main-primary hover:after:w-full after:transition-all after:duration-300"
          }`}
        >
          <a href={karyawan} className="px-5 text-ml text-textColor-primary font-semibold block py-2 md:py-3">
            Karyawan
          </a>
        </li>
        <li
          onClick={() => {
            setDropDown((prev) => !prev);
          }}
          className={`relative group transition-all duration-300 ease-in-out `}
        >
          <div className={`px-5 cursor-pointer text-ml text-textColor-primary font-semibold block py-2 md:py-3 ${pathname === service ? "bg-main-primary" : "hover:bg-main-accent "}`}>
            Service
            <span className="ml-1 transform -translate-y-1/2 text-xs">&#x25BC;</span> {/* Panah ke bawah */}
          </div>
          <span className="block h-[2px] bg-main-primary w-0 group-hover:w-full transition-all duration-300"></span>
          <div
            className={`md:absolute md:w-60 md:-right-2 md:backdrop-blur-sm md:bg-opacity-85  transition-all ease-in-out duration-1000 p-1 right-0 z-10 origin-top-right rounded-md md:bg-white md:shadow-lg md:ring-1 md:ring-black md:ring-opacity-5 focus:outline-none ${
              dropDown ? `block` : `hidden md:group-hover:block`
            }`}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex="-1"
          >
            <div className="py-1 " role="none">
              <a href="#" className="break-all block px-4 py-2 text-sm text-gray-700 hover:bg-main-accent" role="menuitem" tabIndex="-1">
                Gigi
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-main-accent" role="menuitem" tabIndex="-1">
                Jantung
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-main-accent" role="menuitem" tabIndex="-1">
                Kelamin
              </a>
            </div>
          </div>
        </li>
      </ul>
    );
  };

  const NavbarMobile = () => {
    return (
      <div className="relative">
        <button className={`btn bg-gray-200 m-1 border ${isBlurred ? `border-slate-200` : ``} `} onClick={() => setMenu((prev) => !prev)}>
          {menu ? <RxHamburgerMenu /> : <MdOutlineClose />}
        </button>

        {/* Dropdown Menu */}
        {!menu && (
          <nav ref={navMobile} className="absolute z-50 dropdown-content w-52 bg-opacity-95 backdrop-blur-sm border bg-slate-300 mx-2 rounded p-2">
            <IsiLi />
          </nav>
        )}
      </div>
    );
  };

  const Navbar = () => {
    return (
      <nav>
        <div className={`flex  px-3 items-center bg-white ${isBlurred ? `shadow bg-opacity-40 backdrop-blur-sm` : ``}`}>
          <IsiLi />
        </div>
      </nav>
    );
  };

  return (
    <header id="navbar" className={`sticky top-0 z-[9999] w-full container min-[1300px]:max-w-screen-2xl`}>
      <hr className="border-main-primary border-[3px]" />
      <div className="hidden md:block">
        <Navbar />
      </div>
      <div className="md:hidden">
        <NavbarMobile />
      </div>
    </header>
  );
};

export default Navbar;
