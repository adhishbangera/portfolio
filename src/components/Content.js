import React from "react";
import dev from "../assets/dev.png";
import { BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const Content = () => {
  return (
    <>
      <div className="text-centre p-1">
        {/* <h2 className="">Hi Im</h2> */}
        <h1 className="text-5xl py-2 text-teal-600 font-medium">
          Adhish Bangera
        </h1>
        <h2 className="text-2xl py-2">Front-End Web Developer</h2>
        <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-9 overflow-hidden md:h-96 md:w-96">
          <img src={dev} layout="fill" objectFit="cover" />
        </div>
        <div className="text-2xl flex justify-center gap-10 py-1 text-teal-700">
          <a href="https://www.linkedin.com/in/adhish-bangera-69163916b/">
            <BsLinkedin />
          </a>
          <a href="https://github.com/adhishbangera">
            <BsGithub />
          </a>
          <a href="https://twitter.com/adhish_bangera">
            <BsTwitter />
          </a>
          <a href="adhishbangera18@gmail.com">
            <SiGmail />
          </a>
        </div>
      </div>
    </>
  );
};

export default Content;
