import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const NavBar = () => {
  const { loggedIn } = useContext(UserContext);
  return (
    <div className="navbar">
      {loggedIn ? (
        <>
          <Link className="profile" to="/profile">
            Profile
          </Link>
          <Link className="accounts" to="/accounts">
            Accounts
          </Link>
          <Link className="spendings" to="/spendings">
            Spendings
          </Link>
          <Link className="goals" to="/goals">
            Goals
          </Link>
        </>
      ) : (
        <>
          <Link className="home" to="/">
            Dashboard
          </Link>
          <Link className="signup" to="/signup">
            Signup
          </Link>
          <Link className="login" to="/login">
            Login
          </Link>
        </>
      )}
    </div>
  );
};

export default NavBar;
