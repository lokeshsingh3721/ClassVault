import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import assignment from "./assignment";
import notes from "./notes";

export default function Upload() {
  const [category, setCategory] = useState("");
  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File>();
  const router = useRouter();

  const handleUpload = async () => {
    setUploading(true);
    try {
      if (!selectedFile) return;
      const formData = new FormData();
      formData.append(category, selectedFile);
      const { data } = await axios.post("/api/upload", formData);
      console.log(data);
    } catch (error: any) {
      console.log(error.response?.data);
    }
    setUploading(false);
  };

  return (
    <div className="mt-32  flex justify-center items-center">
      <form className="w-4/5 sm:w-1/2 h-auto flex flex-col items-center">
        <div className="w-full border-[1px] bg-primaryLight flex items-center justify-center h-40 sm:h-52 mb-5 transition-all duration-500 hover:scale-105 ">
          <input
            className="text-2xl pl-3  "
            type="file"
            onChange={({ target }) => {
              if (target.files) {
                const file = target.files[0];
                setSelectedFile(file);
              }
            }}
          />
        </div>

        {uploading ? "Loading..." : ""}

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
          onClick={(e) => {
            e.preventDefault();
            handleUpload();
          }}
        >
          Upload
        </button>
      </form>
    </div>
  );
}
