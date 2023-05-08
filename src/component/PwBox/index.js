import React from 'react';
import './style.css'

const PwBox = ({userId,setLoginPw,user,setUser,userPw}) => {
  const onPwClick = () => {
    setLoginPw(false)
    console.log(userPw)
  }
  const onCloseButtonClick = () => {
    setUser({pw : ''})
    setLoginPw(false)
    console.log(userPw)
  }
  return (
    <div className='big-login-box'>
      <div className='login-box'>
        <button className='close-button' onClick={onCloseButtonClick}>X</button>
        <h2>비밀번호를 입력하세요</h2>
        <input className='input' value={userPw || ""} onChange={(e) => {setUser({pw : e.target.value})}} type='password'/>
        <button className='login-button' onClick={onPwClick}>로그인</button>
      </div>
    </div>
  );
};

export default PwBox;