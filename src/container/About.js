import React from "react";
import about from "../assets/about.jpg";
import Skills from "../components/Skills";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-cyan-200">
      <div className="mx-auto  flex flex-wrap">
        <div className="ml-10 md:ml-auto mr-20 max-w-s md:leading-7 md:max-w-lg">
          <h1 className="text-xl pb-2 font-medium md:text-2xl">Hi There</h1>
          <h2 className="text-xl text-teal-600  font-medium md:text-2xl">
            I'm Adhish Bangera
          </h2>
          <hr className="my-8 w-auto h-1 bg-gray-200 rounded border-0 dark:bg-gray-700" />
          <p className="text-sm md:text-base font-sans">
            I am from Mangalore Karnataka. I have been working as a software
            engineer for the past 2.5 years. I initially started working as a
            backend developer with Dot Net and SQL server databases and little
            bit of React which was using ES5. Then i eventually moved on to
            working on Front End by learning HTML, CSS, Javascript and ReactJS
            in the same project. This was when my true passion towards front end
            development started where i was constantly learning and
            simultaneously working on the project using the latest ES6 features
            and functional components of React.
          </p>
          <p className="text-sm md:text-base font-sans">
            I have worked closely with UI/UX team to get feasible and accessible
            UI designs and created reusable components and responsive web pages
            which meets the browser standards and accessibility.
          </p>
          <p className="text-sm md:text-base font-sans">
            Aside from work I love working out, reading books, drawing,
            travelling, bike riding and Im always open to new experiences.
          </p>
          <p className="text-sm md:text-base font-sans">
            Im currently looking for new work oppurtunities as a front end
            developer. If you are aware of any opening please do reach out to
            me.
          </p>
        </div>
        {/* max-w-xl */}
        <div className="ml-10 mt-8 mb-8 md:mt-0 object-scale-down w-80 h-100 md:mr-auto overflow-hidden">
          <img className="object-contain h-45 rounded-lg" src={about} />
        </div>
      </div>
      {/* <Skills /> */}
    </div>
  );
};
export default About;
