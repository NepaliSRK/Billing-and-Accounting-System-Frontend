import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

type Logtype = {
  email: string;
  password: string;
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    console.log(email, password);
    const result = await fetch("http://localhost:3000/auth/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const Logtype = await result.json();
    console.log(Logtype);
    if (Logtype.email) {
      navigate("/");
    } else {
      alert("user not found");
    }
  };

  return (
    <>
      <div className="inputbox">
        <h1>Login</h1>
        <input
          className="inputbox"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        ></input>

        <input
          className="inputbox"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        ></input>
        <button onClick={handleLogin} className="inputbox" type="button">
          Login
        </button>
      </div>
    </>
  );
};

export default Login;
