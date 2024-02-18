import Card from "@/components/card";
import React from "react";

export default function assignment() {
  return (
    <>
      <h1 className="text-2xl underline mt-32 mb-10 text-center italic ">
        Assignments
      </h1>
      <div className=" flex flex-col sm:flex-row sm:flex-wrap sm:gap-7  gap-5 justify-center items-center">
        <Card title="Assignments" subject="Web Designing" />
        <Card title="Assignments" subject="E-Commerce" />
        <Card title="Assignments" subject="Software Engineering" />
        <Card title="Assignments" subject="Object Oriented Programming" />
      </div>
    </>
  );
}