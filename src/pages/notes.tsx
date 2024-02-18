import Card from "@/components/card";
import React from "react";

export default function notes() {
  return (
    <>
      <h1 className="text-2xl underline mt-32 mb-10 text-center italic ">
        Notes
      </h1>
      <div className=" flex flex-col sm:flex-row sm:flex-wrap sm:gap-7  gap-5 justify-center items-center">
        <Card title="Notes" subject="Web Designing" />
        <Card title="Notes" subject="E-Commerce" />
        <Card title="Notes" subject="Software Engineering" />
        <Card title="Notes" subject="Object Oriented Programming" />
      </div>
    </>
  );
}
