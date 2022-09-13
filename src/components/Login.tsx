import React from "react";

const Login = () => {
  return (
    <>
      <div className="inputbox">
        <h1>Login</h1>
        <input className="inputbox" type="text" placeholder="Email"></input>
        <br></br>

        <input
          className="inputbox"
          type="password"
          placeholder="Password"
        ></input>
        <br></br>
        <button className="inputbox" type="button">
          Login
        </button>
      </div>
    </>
  );
};

export default Login;
