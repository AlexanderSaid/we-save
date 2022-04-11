import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSearchParams, useNavigate } from "react-router-dom";
const Test = () => {
  const [password, setPassword] = useState("");
  const [searchParams] = useSearchParams();
  const [res, setRes] = useState(null);
  const navigate = useNavigate();
  const token = searchParams.get("token");
  const onSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.put(
      `http://localhost:5000/api/users/reset-password?token=${token}`,
      {
        password,
      }
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
      <h1>Reset Password</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          value={password}
          placeholder="enter a new password"
        />
        <input type="password" placeholder="confirm your password" />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default Test;
