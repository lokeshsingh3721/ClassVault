"use client";

import React, { useState } from "react";
import Link from "next/link";

import { FaBook, FaPen, FaHome } from "react-icons/fa";

import { MdAssignmentReturned } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [menuOpen, isMenuOpen] = useState(false);
  // const userDetails = useRecoilValue(atomUserData);
  const router = useRouter();

  function menuHandler() {
    isMenuOpen(() => !menuOpen);
  }

  function logoutHandler() {
    router.push("/login");
  }

  // sample

  const userDetails = {
    name: "demo",
  };

  return (
    <nav className="w-full border-2 flex flex-row justify-between py-4 bg-white fixed top-0 z-10">
      <div className="flex flex-row gap-4 justify-baseline items-baseline ">
        <div>
          <p
            onClick={() => menuHandler()}
            className=" sm:hidden cursor-pointer ml-2 "
          >
            {menuOpen ? (
              <MdClose className=" w-6 h-5 -mb-1 " />
            ) : (
              <GiHamburgerMenu className=" w-6 h-5 -mb-1 " />
            )}
          </p>
          <ul
            className={`${
              menuOpen
                ? `flex flex-col gap-5 py-6 items-baseline  border-1 absolute  w-full bg-primary px-5 mt-4 -ml-1 `
                : "hidden"
            } sm:hidden `}
          >
            <Link
              onClick={() => menuHandler()}
              className={`cursor-pointer w-full hover:bg-secondary p-2 `}
              href={"/"}
            >
              <FaHome className="inline-block" /> Home
            </Link>

            <Link
              onClick={() => menuHandler()}
              className={`cursor-pointer w-full hover:bg-secondary p-2 `}
              href={"/assignment"}
            >
              <MdAssignmentReturned className="inline-block" /> Assignment
            </Link>

            <Link
              onClick={() => menuHandler()}
              className={`cursor-pointer w-full hover:bg-secondary p-2 `}
              href={"/syllabus"}
            >
              <span>
                <FaBook className="inline-block" /> Syllabus
              </span>
            </Link>

            <Link
              onClick={() => menuHandler()}
              className={`cursor-pointer w-full hover:bg-secondary p-2 `}
              href={"/notes"}
            >
              <FaPen className="inline-block" /> Notes
            </Link>
          </ul>
        </div>
        <Link className="text-primaryDark" href={"/"}>
          ClassVault
        </Link>
        <p className="cursor-pointer">
          <Link href={"/contact"}>Contact</Link>
        </p>
      </div>
      <div className="  flex-row gap-6 hidden sm:flex ">
        <p className="cursor-pointer">
          <Link href={"/notes"}>Notes</Link>
        </p>
        <p className="cursor-pointer">
          <Link href={"/syllabus"}>Syllabus</Link>
        </p>
        <p className="cursor-pointer">
          <Link href={"/assignment"}>Asssignmet</Link>
        </p>
        <div className=" mr-4 flex flex-row  gap-5 ">
          <p
            className={`w-10 text-xl h-auto rounded-full bg-primaryDark text-white text-center py-1 ${
              userDetails.name ? "inline-block" : "hidden"
            } `}
          >{`${userDetails.name ? userDetails.name[0] : ""}`}</p>
          <Link
            className={`cursor-pointer ${userDetails.name ? "hidden" : ""} `}
            href={"/login"}
          >
            Login
          </Link>
          <button
            onClick={() => logoutHandler()}
            className={`${userDetails.name ? "inline-block" : "hidden"} `}
          >
            logout
          </button>
        </div>
        {/* mobile section  */}
      </div>
      <div className="sm:hidden flex flex-row gap-3 mr-2 ">
        <p
          className={`w-10 text-xl h-auto rounded-full bg-primaryDark text-white text-center py-1 ${
            userDetails.name ? "inline-block" : "hidden"
          } `}
        >{`${userDetails.name ? userDetails.name[0] : ""}`}</p>
        <Link
          className={`cursor-pointer ${userDetails.name ? "hidden" : ""} `}
          href={"/login"}
        >
          Login
        </Link>
        <button className={`${userDetails.name ? "inline-block" : "hidden"} `}>
          logout
        </button>
      </div>
    </nav>
  );
}
