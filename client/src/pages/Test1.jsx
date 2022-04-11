import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Test1 = () => {
  const [email, setEmail] = useState("");
  const [res, setRes] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(
      "http://localhost:5000/api/users/forgot-password",
      { email }
    );
    setRes(data);
  };

  useEffect(() => {
    if (res) {
      navigate("/");
    }
    setRes(null);
  }, [res]);

  return (
    <div>
      <h1>Enter your Password</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email.email}
          placeholder="Enter your email"
        />
        <button type="submit">Send your Email</button>
      </form>
    </div>
  );
};

export default Test1;
