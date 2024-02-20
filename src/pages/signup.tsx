import router from "next/router";
import React, { useState } from "react";
import signupHandler from "./api/lib/signupHandler";

const Signup = () => {
  const [userType, setUserType] = useState("student");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [college, setCollege] = useState("EIT");
  const [collegeRollNo, setCollegeRollNo] = useState("");
  const [course, setCourse] = useState("BCA");
  const [semester, setSemester] = useState("");
  const [subject, setSubject] = useState("Web Designing");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    signupHandler({
      userType,
      name,
      email,
      college,
      collegeRollNo,
      course,
      semester,
      subject,
      password,
    });

    setUserType("student");
    setName("");
    setEmail("");
    setCollege("EIT");
    setCollegeRollNo("");
    setCourse("");
    setSemester("");
    setSubject("Web Designing");
    setPassword("");
  };

  return (
    <div className="container mx-auto mt-14">
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md"
      >
        <h2 className="text-2xl text-center font-bold mb-4">Signup</h2>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">User Type</label>
          <select
            className="border p-2 w-full"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Name</label>
          <input
            type="text"
            className="border p-2 w-full"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Email</label>
          <input
            type="email"
            className="border p-2 w-full"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">College</label>
          <select
            className="border p-2 w-full"
            value={college}
            onChange={(e) => setCollege(e.target.value)}
          >
            <option value="EIT">EIT</option>
            {/* Add other colleges as needed */}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Semester</label>
          <select
            className="border p-2 w-full"
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            {/* Add other semesters as needed */}
          </select>
        </div>

        {userType === "student" && (
          <>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">
                College Roll No
              </label>
              <input
                type="text"
                className="border p-2 w-full"
                placeholder="e.g., 22-BCA-000"
                value={collegeRollNo}
                onChange={(e) => setCollegeRollNo(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Course</label>
              <select
                className="border p-2 w-full"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
              >
                <option value="BCA">BCA</option>
                {/* Add other courses as needed */}
              </select>
            </div>
          </>
        )}

        {userType === "teacher" && (
          <>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Course</label>
              <select
                className="border p-2 w-full"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
              >
                <option value="BCA">BCA</option>
                {/* Add other courses as needed */}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">
                Subject
              </label>
              <select
                className="border p-2 w-full"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              >
                <option value="Web Designing">Web Designing</option>
                <option value="Software Engineering">
                  Software Engineering
                </option>
                <option value="Object Oriented Programming">
                  Object Oriented Programming
                </option>
                <option value="E-Commerce">E-Commerce</option>
                {/* Add other subjects as needed */}
              </select>
            </div>
          </>
        )}

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Password</label>
          <input
            type="password"
            className="border p-2 w-full"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <center>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mb-2 "
          >
            Signup
          </button>
        </center>
        <div className="flex justify-center items-center gap-2">
          <p>Already have an Account? </p>
          <span
            onClick={() => router.push("/login")}
            className=" cursor-pointer underline hover:text-blue-600"
          >
            Login
          </span>
        </div>
      </form>
    </div>
  );
};

export default Signup;
