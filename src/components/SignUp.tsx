import React, { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const collectData = () => {
    console.log(email, password);
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
        <button onClick={collectData} className="appButton" type="button">
          SignUp
        </button>
      </div>
    </>
  );
};

export default SignUp;
