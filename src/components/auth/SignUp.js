import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../firebase";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const SignUp = ({ setAuthUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("User signed up:", userCredential.user);
        setAuthUser(userCredential.user);
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signInWithGoogle = (e) => {
    e.preventDefault();
    signInWithPopup(auth, googleProvider)
      .then((userCredential) => {
        console.log("User signed up:", userCredential.user);
        setAuthUser(userCredential.user);
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
