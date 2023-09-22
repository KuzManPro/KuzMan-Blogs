import { createContext, useState } from 'react';
import ReactSwitch from 'react-switch';

export const ThemeContext = createContext(null)

const DarkMode = () => {
    const [theme, setTheme] = useState("light")

    const toggleTheme = () => {
      setTheme((curr) => (curr === "light" ? "dark" : "light"))
    };
    return ( 
        <div className='switch'>
            <label>{ theme === "light" ? "Light Mode" : "Dark Mode" }</label>
            <ReactSwitch onChange={toggleTheme} checked = {theme === "dark"}/>
        </div>
    );
}
 
export default DarkMode;