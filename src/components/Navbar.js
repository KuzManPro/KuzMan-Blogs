import React from "react";
import { Link } from "react-router-dom";
import DarkMode from "./DarkMode";
import { useAuth } from "./auth/AuthContext";

const Navbar = () => {
  const { currentUser, logout } = useAuth();

  console.log("authUser in Navbar:", currentUser);

  return (
    <nav className="navbar">
      <h1>KuzMan Blogs</h1>
      <DarkMode />
      <div className="links">
        <Link to="/">Home</Link>
        {currentUser ? (
          <Link to="/create">
            <button>New Blog</button>
          </Link>
        ) : (
          <Link to="/login">
            <button>Log In</button>
          </Link>
        )}
      </div>
      {currentUser && <p>Signed In as {currentUser.email}</p> && (
        <button onClick={() => logout()}>Sign out</button>
      )}
    </nav>
  );
};

export default Navbar;
