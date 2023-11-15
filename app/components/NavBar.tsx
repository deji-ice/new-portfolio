"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { GrClose } from "react-icons/gr";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";

const NavBar = () => {
  const [show, setShow] = useState(false);

  return (
    <div className=" flex px-20 pt-10  text-white relative items-center justify-between">
      <span className={`z-30 ${show ? "text-black" : "text-white"}`}>
        <Link href="/">DEJIXICE</Link>
      </span>
      <div
        onClick={() => setShow((prev) => !prev)}
        className=" flex z-30 items-center gap-2 "
      >
        <p
          className={`p-1 text-xs ${
            show ? "bg-black text-white" : "bg-white text-black"
          } `}
        >
          Explore
        </p>

        {show ? (
          <GrClose className={`text-3xl cursor-pointer text-black`} />
        ) : (
          <RxHamburgerMenu className={`text-3xl cursor-pointer text-white`} />
        )}
      </div>
      {show && (
        <motion.div className="bg-orange-600 h-screen flex  z-20 py-28 px-20 absolute left-0 right-0 top-0">
          <div className="flex-[2]">
            <ul className="text-5xl flex uppercase flex-col gap-6">
              <li>
                <Link onClick={() => setShow((prev) => !prev)} href={'/'}>Home</Link>
              </li>
              <li>
                <Link onClick={() => setShow((prev) => !prev)} href={"/about"}>Persona Blurb</Link>
              </li>
              <li>
                <Link onClick={() => setShow((prev) => !prev)} href={"/experience"}>Experience</Link>
              </li>
              <li>
                <Link onClick={() => setShow((prev) => !prev)} href={"/About"}></Link>Stack
              </li>
              <li>
                <Link onClick={() => setShow((prev) => !prev)} href={"/About"}>Projects</Link>
              </li>
              <li>
                <Link onClick={() => setShow((prev) => !prev)} href={"/About"}>Contact</Link>
              </li>
            </ul>
          </div>
          <div className="flex-[1] flex flex-col items-center justify-center">
            <div>
              <h2 className="uppercase">Have a project or want to talk</h2>
            </div>
            <div> </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default NavBar;
