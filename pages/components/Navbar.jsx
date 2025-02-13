import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="text-white flex md:justify-around items-center p-[40px] justify-between">
        <Link href="/">
          <h1 className="text-2xl">SQAI</h1>
        </Link>

        <div>
          <ul className="md:flex gap-[50px] text-sm hidden">
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#speakers">Speakers</Link>
            </li>
            <li>
              <Link href="#agenda">Agenda</Link>
            </li>
            <li>
              <Link href="#organizers">Organizers</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl md:block hidden">
            <Link href="#join-us">Join</Link>
          </h3>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className={`z-[500px]  ${
            open ? "text-gray-900" : ""
          } text-3xl md:hidden `}
        >
          <Image
            src={open ? "/icon-close.svg" : "/icon-hamburger.svg"}
            alt="icon"
            width={20}
            height={20}
          ></Image>
        </div>

        <div
          className={`md:hidden text-white absolute w-2/3 h-screen z-10
      px-7 py-2 font-medium bg-[#141414] top-0 duration-300 ${
        open ? "left-0 block" : "right-0 hidden"
      }`}
        >
          <ul className="flex flex-col justify-center h-[300px] gap-10 py-2 text-lg mt-[200px]">
            <li onClick={() => setOpen(!open)}>
              <Link href="#about">About</Link>
            </li>
            <li onClick={() => setOpen(!open)}>
              <Link href="#speakers">Speakers</Link>
            </li>
            <li onClick={() => setOpen(!open)}>
              <Link href="#agenda">Agenda</Link>
            </li>
            <li onClick={() => setOpen(!open)}>
              <Link href="#organizers">Organizers</Link>
            </li>
            <li onClick={() => setOpen(!open)}>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
