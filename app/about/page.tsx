/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="px-20 py-16 flex flex-col items-center">
      <h1 className="text-2xl font-semibold text-white mb-16" >./PersonaBlurb</h1>
      <div className="flex items-center">
        {/* <Image
        className="rounded-full h-56"
          width={500}
          height={500}
          alt="image of zoro"
          src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1700041482/mines/pngegg_2_xlld0b.png"
        /> */}

        <div className="flex flex-col text-white w-fit px-40 gap-5">
          <p>
            Hey there! I'm Ayodeji, a passionate web developer with a knack for
            creating visually stunning designs that captivate audiences. I
            believe that great design should be accessible to everyone, and
            that's what drives me to craft user-friendly websites that leave a
            lasting impression.
          </p>
          <p>
            By day, I'm a dedicated full-stack web developer, leveraging my 2
            years of experience in the field to bring innovative solutions to
            life. I enjoy the dynamic nature of my work, constantly pushing
            boundaries to deliver seamless experiences and optimize websites for
            better search engine visibility.
          </p>
          <p>
            Beyond the realm of code and design, I find joy in the simple
            pleasures of life. Music is a passion of mine, serving as a constant
            source of inspiration and motivation throughout my creative journey.
            And when I'm not coding or designing, you can find me enjoying the
            refreshing embrace of the water, as swimming provides me with the
            perfect outlet for relaxation and rejuvenation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
