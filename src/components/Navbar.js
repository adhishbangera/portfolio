import React from "react";
import { BsSun } from "react-icons/bs";
import adhish from "../assets/adhish.jpg";
const Navbar = () => {
  return (
    <>
      <nav className="mx-auto py-5 px-5 mb-12 mr flex justify-between">
        {/* <h1 className="font-sans p-1">Portfolio</h1> */}
        {/* <Image src={adhish} /> */}
        <img
          className="relative bg-gradient-to-b rounded-full w-12 h-12 rouded-full"
          src={adhish}
        />
        <div className="flex space-x-4 ">
          <a
            className="hover:bg-gray-100 pt-2 p-1 rounded-md font-sans"
            href="#"
          >
            Home
          </a>
          <a
            className="hover:bg-gray-100 pt-2 p-1 rounded-md font-sans"
            href="#"
          >
            About
          </a>
          <a
            className="hover:bg-gray-100 pt-2 p-1 rounded-md font-sans"
            href="#"
          >
            Work
          </a>
          <a
            className="hover:bg-gray-100 pt-2 p-1 rounded-md font-sans"
            href="#"
          >
            Hobbies
          </a>
          <button className="hover:bg-gray-100 p-1 rounded-md">
            <BsSun />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
