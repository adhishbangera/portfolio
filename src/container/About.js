import React from "react";
import about from "../assets/about.jpg";

const About = () => {
  return (
    <div className="mx-auto h-screen bg-gradient-to-b from-white to-cyan-200 flex">
      <div className="mx-auto">
        <h1>Hello</h1>
        <h2>Im Adhish Bangera</h2>
        <hr />
      </div>
      {/* max-w-xl */}
      <div className="object-scale-down w-80 h-100 mx-auto overflow-hidden">
        <img className="object-contain h-45" src={about} />
      </div>
    </div>
  );
};
export default About;
