import React from "react";
import { useRouter } from "next/router";
import SinglePageCard from "@/components/singlePageCard";

export default function SinglePage() {
  const router = useRouter();

  const { title, subject } = router.query;

  return (
    <>
      <h1 className="mb-5 mt-32 text-center text-2xl underline">
        {subject} <br />
        {title}
      </h1>
      <div className=" flex sm:flex-row sm:flex-wrap     flex-col justify-center items-center sm:gap-7 ">
        <SinglePageCard title={`unit-1`} />
        <SinglePageCard title={`unit-2`} />
        <SinglePageCard title={`unit-3`} />
        <SinglePageCard title={`unit-4`} />
      </div>
    </>
  );
}
