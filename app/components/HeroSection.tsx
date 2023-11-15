/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion } from "framer-motion";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const HeroSection = () => {
  const [text, count] = useTypewriter({
    words: [
      "Software Engineer.",
      "Frontend Developer.",
      "Graphic Designer.",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <motion.div className=" text-yellow-50 flex flex-col gap-5 justify-center py-16  items-start ">
      <h4 className="text-xl font-light">Hi my name is </h4>
      <h1 className="text-6xl font-semibold">Ayodeji Atanda</h1>
      <h1 className="text-6xl">
        <span className=" underline-offset-4 underline">{text}</span><Cursor cursorColor="#ffffff" />
      </h1>
      <p className="mt-5 max-w-3xl font-medium uppercase">I am a <span className="text-gray-500">Software Engineer </span> with a passion for developing exceptional digital experiences.
         My expertise lies in constructing accessible, user-centered, and SEO-friendly products. 
         As an independent professional, I have the flexibility to engage in various projects and am currently 
         open to new opportunities.
         Let's collaborate to create outstanding solutions tailored to your needs.</p>
    </motion.div>
  );
};

export default HeroSection;
