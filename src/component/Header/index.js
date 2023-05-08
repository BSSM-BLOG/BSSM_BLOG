import React from 'react';
import './style.css'

const Header = ({setLoginId}) => {

  const onHandleLoginClick = () => {
    setLoginId(true)
  }

  return (
    <>
      <header>
        <h2>BSSM BLOG</h2>
        <button className='login' onClick={onHandleLoginClick}>Log In</button>
      </header>
    </>
  );
};

export default Header;