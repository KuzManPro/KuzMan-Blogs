import React from 'react';
import {Link} from 'react-router-dom';
import DarkMode from './DarkMode';

const Navbar = ({authUser}) => {
    console.log("authUser in Navbar:", authUser);

    return ( 
        <nav className="navbar">
            <h1>KuzMan Blogs</h1>
            <DarkMode />
            <div className="links">
                <Link to="/">Home</Link>
                {authUser ? (
                    <Link to="/create">
                        <button>New Blog</button>
                    </Link>
                ) : (
                    <Link to="/login">
                        <button>Log In</button>
                    </Link>
                )}
            </div>
            {authUser && <p>Signed In as {authUser.email}</p>}
        </nav>
    );
}
 
export default Navbar;