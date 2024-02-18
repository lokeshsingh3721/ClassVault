import React, { useState } from "react";
import Router, { useRouter } from "next/router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Process the login logic or send data to the server
    console.log({ email, password });
  };

  return (
    <div className="container mx-auto mt-32">
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md"
      >
        <h2 className="text-2xl text-center font-bold mb-4">Login</h2>

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
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600  mb-2 "
          >
            Login
          </button>
        </center>

        <div className="flex justify-center items-center gap-2">
          <p>Dont have an Account? </p>
          <span
            onClick={() => router.push("/signup")}
            className=" cursor-pointer underline hover:text-blue-600"
          >
            Signup
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
