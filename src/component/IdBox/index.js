import React, { useState } from 'react';
import './style.css'

const IdBox = ({setLoginId,setLoginPw,userId,setUser}) => {
  const onButtonClick = () => {
    setLoginId(false)
    setLoginPw(true)
    console.log(userId)
  }
  return (
    <div className='big-login-box'>
      <div className='login-box'>
        <h2>아이디를 입력하세요</h2>
        <input value={userId} onChange={(e) => {setUser({id : e.target.value})}} />
        <button onClick={onButtonClick}>계속하기</button>
      </div>
    </div>
  );
};

export default IdBox;