import React from "react";

const Cards = (props) => {
  return (
    <div class="bg-white max-w-sm rounded overflow-hidden drop-shadow-[0_35px_35px_rgba(0,0,0,0.3)] transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300">
      <img
        class="w-30 h-40 px-2 py-2 pl-10"
        src={props.image}
        alt="Sunset in the mountains"
      />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{props.title}</div>
        <p class="text-gray-700 text-base">{props.desc}</p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {props.p1}
        </span>
        {props.p2 && (
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {props.p2}
          </span>
        )}

        {props.p3 && (
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {props.p3}
          </span>
        )}
      </div>
    </div>
  );
};

export default Cards;
