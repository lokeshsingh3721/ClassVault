import React from "react";
import Link from "next/link";

export default function Card({ title, subject }: Card) {
  return (
    <Link
      href={`/singlePage?subject=${subject}&title=${title}`}
      className="text-xl  w-4/5 sm:w-1/3 h-48 border-[1px]   shadow-xl r  rounded p-4 transition-all duration-500 hover:scale-110  flex justify-center items-center cursor-pointer bg-primaryLight "
    >
      <p>{subject}</p>
    </Link>
  );
}
