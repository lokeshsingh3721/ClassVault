import React, { useState } from "react";

export default function Upload() {
  const [category, setCategory] = useState("");

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(category);
  }

  return (
    <div className="mt-32  flex justify-center items-center">
      <form
        className="w-4/5 sm:w-1/2 h-auto flex flex-col items-center"
        onSubmit={submitHandler}
      >
        <div className="w-full border-[1px] bg-primaryLight flex items-center justify-center h-40 sm:h-52 mb-5 transition-all duration-500 hover:scale-105 ">
          <input className="text-2xl pl-3  " type="file" name="upload" />
        </div>

        <label className="text-3xl mb-3" htmlFor="category">
          Choose a category
        </label>
        <select
          className="text-xl p-4 w-4/5 mb-5 rounded-md bg-secondary outline-none   "
          name="category"
          id="category"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option value="Notes">Notes</option>
          <option value="Assignment">Assignment</option>
        </select>

        <button
          className="px-6 py-3 border-[1px] text-xl  bg-primaryLight rounded-md "
          type="submit"
          value="Submit"
        >
          Upload
        </button>
      </form>
    </div>
  );
}
