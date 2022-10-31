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
import { BiGitBranch } from "react-icons/bi";
import { SiAzuredevops } from "react-icons/si";

const Skills = () => {
  return (
    <div className="mt-10 md:mt-20 w-screen bg-teal-500">
      <h1 className="text-center font-medium text-xl md:text-3xl py-4 md:py-8 text-white">
        Skills
      </h1>
      <div className="mx-auto flex flex-wrap pb-10 gap-5 md:gap-10 justify-center text-2xl md:text-4xl text-teal-700">
        <a
          className="bg-white rounded-full p-3 md:p-10 drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)] transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300"
          href="https://html.com/"
        >
          <AiFillHtml5 className="text-orange-500" />
        </a>
        <a
          className="bg-white rounded-full p-3 md:p-10 drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)] transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300"
          href="https://developer.mozilla.org/en-US/docs/Web/CSS"
        >
          <DiCss3 className="text-blue-600" />
        </a>
        <a
          className="bg-white rounded-full p-3 md:p-10 drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)] transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300"
          href="https://www.javascript.com/"
        >
          <DiJavascript1 className="text-yellow-400" />
        </a>
        <a
          className="bg-white rounded-full p-3 md:p-10 drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)] transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300"
          href="https://reactjs.org/"
        >
          <FaReact className="text-blue-600" />
        </a>
        <a
          className="bg-white rounded-full p-3 md:p-10 drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)] transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300"
          href="https://sass-lang.com/"
        >
          <DiSass className="text-pink-600" />
        </a>
        <a
          className="bg-white rounded-full p-3 md:p-10 drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)] transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300"
          href="https://tailwindcss.com/"
        >
          <SiTailwindcss className="text-blue-500" />
        </a>
        <a
          className="bg-white rounded-full p-3 md:p-10 drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)] transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300"
          href="https://git-scm.com/"
        >
          <BiGitBranch className="text-red-600" />
        </a>
        <a
          className="bg-white rounded-full p-3 md:p-10 drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)] transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300"
          href="https://azure.microsoft.com/en-us/products/devops/"
        >
          <SiAzuredevops className="text-blue-600" />
        </a>
      </div>
    </div>
  );
};

export default Skills;
