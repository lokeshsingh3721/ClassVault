import Link from "next/link";
import React from "react";

export default function SinglePageCard({ title }: { title: string }) {
  return (
    <div className="flex flex-col w-4/5 sm:w-1/3 ">
      <div className="text-xl   h-48 border-[1px] shadow-xl r  rounded p-4 transition-all duration-500 hover:scale-110  flex justify-center items-center cursor-pointer bg-primaryLight  ">
        <p>{title}</p>
      </div>
      <button className="px-5 py-2 my-4 border-[1px] rounded-md bg-accentDark   ">
        Download
      </button>
    </div>
  );
}
