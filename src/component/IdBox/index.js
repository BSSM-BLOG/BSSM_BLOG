import React, { useState } from 'react';
import './style.css'

const IdBox = ({setLoginId,setLoginPw,userId,setUser}) => {
  const onButtonClick = () => {
    setLoginId(false)
    setLoginPw(true)
    console.log(userId)
  }
  const onCloseButtonClick = () => {
    setLoginId(false)
    setUser({id : ''})
  }
  return (
    <div className='big-login-box'>
      <div className='login-box'>
        <button className='close-button' onClick={onCloseButtonClick}>X</button>
        <h2>아이디를 입력하세요</h2>
        <input className='input' value={userId} onChange={(e) => {setUser({id : e.target.value})}} />
        <button className='login-button' onClick={onButtonClick}>계속하기</button>
      </div>
    </div>
  );
};

export default IdBox;