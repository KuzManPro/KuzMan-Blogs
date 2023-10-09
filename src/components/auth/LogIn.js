import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useAuth } from "./AuthContext";

const LogIn = () => {
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLogIn = (e) => {
    e.preventDefault();
    login(email, password)
      .then((userCredential) => {
        history.push("/");
        alert("Successfully logged in!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="sign-in-container">
      <form onSubmit={handleLogIn}>
        <h1>Log In</h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Log In</button>
      </form>
      <p className="no-account">Don't have an account?</p>
      <Link to="/signup">
        <button>Click here to create one</button>
      </Link>
    </div>
  );
};

export default LogIn;
