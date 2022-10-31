import React from "react";
import Cards from "../components/Cards";
import atcat from "../assets/atcat.PNG";
import att from "../assets/att.PNG";
import portfolio from "../assets/portfolio.PNG";
import amazon from "../assets/amazon.PNG";
import food from "../assets/food.PNG";

const Work = () => {
  const atcatDesc =
    "Accenture Transaction Compliance and Analytics Tool (ATCAT) is a proprietary Accenture Software that proactively identifies and prevents overpayments in real time within the procure-to-pay (P2P) process.The team works on design, development and maintenance of this tool.";
  const attDesc =
    "ATT Inc. is an American multinational telecommunications company which deals with telecom services. The team works on small-business and consumer support pages of ATT.";
  const portfolioDesc =
    "This is my personal portfolio website where I have described about myself, my work experience, things im passionate about and projects.";
  const amazonCloneDesc =
    "This is a clone of popular shopping website Amazon which i had build to learn more about ReactJS and its various concepts like component based approach, routing and context API.";
  const foodOrderingAppDesc =
    "This is a food ordering app where users are able to select and add the food items they want which will later be displayed in the UI as a total list with the respective amount for the total order.";
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-cyan-400">
      <h1 className="ml-10 md:ml-20 text-xl md:text-2xl font-medium py-4 mb-8 underline underline-offset-8">
        Company Projects
      </h1>
      <div className="mx-auto flex flex-wrap gap-10 ml-10 md:ml-20">
        <Cards
          image={atcat}
          desc={atcatDesc}
          title={"ATCAT"}
          p1={"ReactJS"}
          p2={"Dot Net Core"}
          p3={"SQL Server"}
        />
        <Cards
          image={att}
          desc={attDesc}
          title={"Aristos Mojave Smokey"}
          p1={"NextJS"}
          p2={"TypeScript"}
        />
      </div>
      <h2 className="mt-20 ml-10 md:ml-20 text-xl md:text-2xl font-medium py-4 mb-8 underline underline-offset-8">
        Personal Projects
      </h2>
      <div className="mx-auto flex flex-wrap gap-10 ml-10 md:ml-20 pb-20">
        <Cards
          image={portfolio}
          desc={portfolioDesc}
          title={"Portfolio Website"}
          p1={"ReactJS"}
          p2={"Tailwind CSS"}
        />
        <Cards
          image={amazon}
          desc={amazonCloneDesc}
          title={"Amazon Clone"}
          p1={"ReactJS"}
          p2={"Material UI"}
          p3={"Firebase"}
        />
        <Cards
          image={food}
          desc={foodOrderingAppDesc}
          title={"Food Ordering App"}
          p1={"ReactJS"}
        />
      </div>
    </div>
  );
};
export default Work;
