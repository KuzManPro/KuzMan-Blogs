import React from "react";
import { Link } from "react-router-dom";
import DarkMode from "./DarkMode";
import { useAuth } from "./auth/AuthContext";

const Navbar = () => {
  const { currentUser, logout } = useAuth();

  return (
    <nav className="navbar">
      <h1>KuzMan Blogs</h1>
      <DarkMode />
      <div className="links">
        <Link to="/KuzMan-Blogs/">Home</Link>
        {currentUser ? (
          <Link to="/KuzMan-Blogs/create">
            <button>New Blog</button>
          </Link>
        ) : (
          <Link to="/KuzMan-Blogs/login">
            <button>Log In</button>
          </Link>
        )}
      </div>
      {currentUser && (
        <button
          onClick={() => logout()}
          style={{
            backgroundColor: "#990000",
          }}
        >
          Sign Out
        </button>
      )}
    </nav>
  );
};

export default Navbar;
