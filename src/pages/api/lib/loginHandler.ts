import router from "next/router";

async function loginHandler({ email, password, userType }: Login) {
  try {
    const res = await fetch("api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, userType }),
    });

    return res.json();
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}

export default loginHandler;
