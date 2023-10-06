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
