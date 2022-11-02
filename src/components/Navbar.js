import React, { useState } from "react";
import { BsSun } from "react-icons/bs";
import adhish from "../assets/adhish.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const onButtonClick = () => {
    fetch("adhishCV.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Adhish Bangera.pdf";
        alink.click();
      });
    });
  };
  return (
    <>
      <nav className="mx-auto  flex justify-between py-4 px-2 mb-12 md:py-5 md:px-5 md:mb-12">
        <img
          className="relative bg-gradient-to-b rounded-full w-12 h-12"
          src={adhish}
        />
        <div className="flex space-x-2 md:space-x-4 ">
          <Link
            className="hover:bg-gray-100 pt-2 p-1 rounded-md font-sans hover:text-cyan-700"
            to="/"
          >
            Home
          </Link>

          <Link
            className="hover:bg-gray-100 pt-2 p-1 rounded-md font-sans  hover:text-cyan-700"
            to="/about"
          >
            About
          </Link>
          <Link
            className="hover:bg-gray-100 pt-2 p-1 rounded-md font-sans  hover:text-cyan-700"
            to="/work"
          >
            Work
          </Link>

          <button
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 transition ease-in-out delay-100 hover:from-cyan-800 hover:to-teal-800"
            onClick={onButtonClick}
          >
            Resume
          </button>

          {/* <button>Resume</button> */}
          {/* <button
            className="hover:bg-gray-100 pb-2 p-1 rounded-md  hover:text-cyan-700"
            onClick={() => setDarkMode(!darkMode)}
          >
            <BsSun />
          </button> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
