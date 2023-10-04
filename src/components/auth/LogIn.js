import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const LogIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            history.push('/');
            console.log(userCredential)
        }).catch((error) => {
            console.log(error);
        })
    }

    return ( 
        <div className="sign-in-container">
            <form onSubmit={LogIn}>
                <h1>Log In</h1>
                <input type="email" 
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                ></input>
                <input type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                ></input>
                <button type="submit">Log In</button>
            </form>
            <p>Don't have an account?</p>
            <Link to="/signup">
                <p>Click here to create one</p>
            </Link>
        </div>
    );
}
    
export default LogIn;