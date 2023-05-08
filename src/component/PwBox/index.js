import React from 'react';
import './style.css'

const PwBox = ({user,setUser,userPw}) => {
  return (
    <div className='big-login-box'>
      <div className='login-box'>
        <h2>비밀번호를 입력하세요</h2>
        <input value={userPw} onChange={(e) => {setUser({pw : e.target.value})}} />
        <button>계속하기</button>
      </div>
    </div>
  );
};

export default PwBox;