import React from "react";

export default function Card({ title }: Card) {
  return (
    <div className="w-4/5 h-40 border-[1px] border-black shadow-xl flex justify-center items-center cursor-pointer rounded p-4 transition-all duration-500 hover:scale-110 ">
      <p className=" text-xl  ">{title}</p>
    </div>
  );
}
