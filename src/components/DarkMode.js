import React, { useContext } from 'react';
import ReactSwitch from 'react-switch';
import { ThemeContext } from '../App';
import sunIcon from './theme_img/sun.ico';
import moonIcon from './theme_img/moon.ico';

const DarkMode = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className='switch'>
      <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'}
      checkedHandleIcon={<img src={moonIcon} alt="Moon" 
      style={{
        margin: -10,
        padding: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 28,
      }}/>}
      uncheckedHandleIcon={<img src={sunIcon} alt="Sun" 
      style={{
        margin: -11,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
      }}/>}
      offColor='#ccc'
      onColor='#be5c00'
      uncheckedIcon={false}
      checkedIcon={false}
      handleDiameter={0}
      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
      activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
      height={20}
      width={48}/>
    </div>
  );
};

export default DarkMode;