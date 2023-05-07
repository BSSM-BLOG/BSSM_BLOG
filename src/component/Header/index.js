import React, { useState } from 'react';
import LoginBox from '../LoginBox';
import './style.css'

const Header = () => {

  const [login,setLogin] = useState(false)

  const onHandleLoginClick = () => {
    setLogin(true)
  }

  return (
    <>
      <header>
        <h2>BSSM BLOG</h2>
        <button className='login' onClick={onHandleLoginClick}>Log In</button>
      </header>
      {login && <LoginBox />}
    </>
  );
};

export default Header;