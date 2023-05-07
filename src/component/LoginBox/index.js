import React, { useRef, useState } from 'react';
import './style.css'

const LoginBox = () => {
  const [user,setUser] = useState('')
  const onButtonClick = () => {
    console.log(user)
  }
  return (
    <div className='big-login-box'>
      <div className='login-box'>
        <h2>아이디를 입력하세요</h2>
        <input value={user} onChange={(e) => {setUser(e.target.value)}} type='text' />
        <button onClick={onButtonClick}>계속하기</button>
      </div>
    </div>
    
  );
};

export default LoginBox;