import { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, db, googleProvider } from "../../firebase";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

const SignUp = () => {
  const { signup } = useAuth();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userData = {
    username: username,
    email: email,
    password: password,
    created: serverTimestamp(),
  };
  const history = useHistory();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signup(email, password);
      await setDoc(doc(db, "users", userCredential.user.uid), userData);
      history.push("/");
      alert("Successfully signed in!");
    } catch (error) {
      console.log(error);
    }
  };

  const signInWithGoogle = (e) => {
    e.preventDefault();
    signInWithPopup(auth, googleProvider)
      .then(() => {
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="sign-in-container">
      <form onSubmit={handleSignUp}>
        <h1>Create an Account</h1>
        <input
          type="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Create</button>
        <button onClick={signInWithGoogle}>Log In With Google</button>
      </form>
      <p>Already have an account?</p>
      <Link to="/login">
        <p>Click here to log in</p>
      </Link>
    </div>
  );
};

export default SignUp;
