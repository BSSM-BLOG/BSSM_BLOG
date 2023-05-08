import { useState } from 'react';
import './App.css';
import Header from './component/Header';
import IdBox from './component/IdBox';
import PwBox from './component/PwBox';

function App() {
  const [loginId,setLoginId] = useState(false)
  const [loginPw,setLoginPw] = useState(false)
  const [user,setUser] = useState({
    id : '',
    pw : ''
  })
  return (
    <>
      <Header 
        setLoginPw = {setLoginPw}
        setLoginId = {setLoginId}
      />
      {loginId && <IdBox 
        setLoginId = {setLoginId}
        setUser = {setUser}
        userPw = {user.pw}
        userId = {user.id}
      />}
      {loginPw && <PwBox 
        setUser = {setUser}
        user = {user}
        userPw = {user.pw}
      />}
    </>
  );
}

export default App;
