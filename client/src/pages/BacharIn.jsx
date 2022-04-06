import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import NavBar from "../components/layout/NavBar";

const SignIn = () => {
  const { login } = useContext(UserContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const onChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    login(userData);
  };
  return (
    <>
      <NavBar />
      <form onSubmit={onSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={onChange}
          placeholder="Enter your Email"
          required
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          placeholder="Enter Your Password"
          required
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default SignIn;
