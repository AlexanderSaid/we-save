import React, { useState } from "react";
import SignIn from "./SignIn";

export default function SignupForm({ open, close }) {
  const [formData, setFormData] = useState({
    firstname: "",
    secondname: "",
    email: "",
    password: "",
  });
  const [signin, setSignin] = useState(false);
  const { firstname, secondname, email, password } = formData;
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      firstname,
      secondname,
      email,
      password,
    };
    if (password.length <= 6) {
      alert("password too short");
    } else {
      console.log(newUser);
    }
  };
  if (signin) {
    return <SignIn close={setSignin} setClose={close} />;
  }
  return (
    open && (
      <div className="  flex flex-col fixed top-0 bg-[rgba(255,255,255,0.5)]   left-0 right-0 w-full  h-full  z-[1000]">
        <div className="container mx-auto flex-1 flex flex-col items-center justify-center px-2 ">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black max-w-[600px] w-[70%]  relative">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <button
              className="absolute border-2 border-primary rounded-full px-3 py-1 text-black-400 bg-primary right-[-10px] top-[-15px]"
              onClick={() => close(false)}
            >
              X
            </button>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="first name"
              placeholder="first name"
              id="firstname"
              onChange={handleChange}
            />
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="second name"
                placeholder="second name"
                id="secondname"
                onChange={handleChange}
              />

              <input
                type="email"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email"
                id="email"
                onChange={handleChange}
              />

              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password"
                id="password"
                onChange={handleChange}
              />

              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-primary text-black hover:bg-green-dark focus:outline-none my-1"
              >
                Create Account
              </button>
            </form>

            <div className="text-grey-dark mt-6">Already have an account?</div>
            <button
              className="text-center py-3 rounded bg-primary py-2 px-2 mt-2"
              onClick={() => setSignin(true)}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    )
  );
}
