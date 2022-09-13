import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <ul className="nav-ul">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/category">Category</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
