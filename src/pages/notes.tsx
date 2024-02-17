import Card from "@/components/card";
import React from "react";

export default function notes() {
  return (
    <div className="mt-32 flex flex-col gap-5 justify-center items-center">
      <h1 className="text-2xl underline ">Notes</h1>

      <Card title="Web Designing" />
      <Card title="E-Commerce" />
      <Card title="Software Engineering" />
      <Card title="Object Oriented Programming" />
    </div>
  );
}
