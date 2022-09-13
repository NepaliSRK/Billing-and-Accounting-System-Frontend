import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const collectData = async () => {
    console.log(email, password);
    let result = await fetch("http://localhost:5000/auth/signup", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if (result) {
      navigate("/login");
    }
  };

  return (
    <>
      <div className="inputbox">
        <h1>Register</h1>
        <input
          className="inputbox"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        ></input>
        <br></br>

        <input
          className="inputbox"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        ></input>
        <br></br>
        <button onClick={collectData} className="inputbox" type="button">
          SignUp
        </button>
      </div>
    </>
  );
};

export default SignUp;
