import React from "react";
// import html from "../assets/html.png";
// import css from "../assets/css.png";
// import js from "../assets/js.png";
// import react from "../assets/react.png";
// import sass from "../assets/sass.png";
// import tailwind from "../assets/tailwind.png";
// import git from "../assets/git.png";
// import azure from "../assets/azure.png";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { DiSass } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { VscAzure } from "react-icons/vsc";

const Skills = () => {
  return (
    <div className="justify-center px-20 w-25">
      <h1 className="text-xl pb-2 font-medium md:text-2xl">Skills</h1>
      <div className=" columns-4 justify-center text-2xl gap-10 py-1 px-1 text-teal-700">
        <div className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-150">
          <AiFillHtml5 />
        </div>
        <div className="transition ease-in-out delay-100 hover:-translate-y-2 hover:scale-150">
          <DiCss3 />
        </div>
        <div className="transition ease-in-out delay-100 hover:-translate-y-2 hover:scale-150">
          <DiJavascript1 />
        </div>
        <div className="transition ease-in-out delay-100 hover:-translate-y-2 hover:scale-150">
          <FaReact />
        </div>
        <div className="transition ease-in-out delay-100 hover:-translate-y-2 hover:scale-150">
          <DiSass />
        </div>
        <div className="transition ease-in-out delay-100 hover:-translate-y-2 hover:scale-150">
          <SiTailwindcss />
        </div>
        <div className="transition ease-in-out delay-100 hover:-translate-y-2 hover:scale-150">
          <BsGithub />
        </div>
        <div className="transition ease-in-out delay-100 hover:-translate-y-2 hover:scale-150">
          <VscAzure />
        </div>
      </div>
    </div>
  );
};

export default Skills;
