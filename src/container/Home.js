import React from "react";
import dev from "../assets/dev.png";
import { BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const Home = () => {
  return (
    <div className="text-centre p-1 min-h-screen bg-gradient-to-b from-white to-cyan-100">
      <h1 className="text-center text-3xl py-2 md:text-5xl text-teal-600 font-medium">
        Adhish Bangera
      </h1>
      <h2 className="text-center text-l py-2 md:text-2xl">
        Front-End Web Developer
      </h2>
      <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-9 mb-10 overflow-hidden md:h-96 md:w-96 md:mb-0">
        <img src={dev} layout="fill" objectFit="cover" />
      </div>
      <div className="text-2xl flex justify-center gap-10 py-1 text-teal-700">
        <a
          className="transition ease-in-out delay-100 hover:-translate-y-2 hover:scale-150"
          href="https://www.linkedin.com/in/adhish-bangera-69163916b/"
        >
          <BsLinkedin />
        </a>
        <a
          className="transition ease-in-out delay-100 hover:-translate-y-2 hover:scale-150"
          href="https://github.com/adhishbangera"
        >
          <BsGithub />
        </a>
        <a
          className="transition ease-in-out delay-100 hover:-translate-y-2 hover:scale-150"
          href="https://twitter.com/adhish_bangera"
        >
          <BsTwitter />
        </a>
        <a
          className="transition ease-in-out delay-100 hover:-translate-y-2 hover:scale-150"
          href="adhishbangera18@gmail.com"
        >
          <SiGmail />
        </a>
      </div>
    </div>
  );
};

export default Home;
