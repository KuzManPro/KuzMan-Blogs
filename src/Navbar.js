import React from 'react';
import {Link} from 'react-router-dom';
import DarkMode from './DarkMode';

const Navbar = () => {

    return ( 
        <nav className="navbar">
            <h1>KuzMan Blogs</h1>
            <DarkMode />
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">
                    <button>New Blog</button>
                </Link>
            </div>
        </nav>
    );
}
 
export default Navbar;