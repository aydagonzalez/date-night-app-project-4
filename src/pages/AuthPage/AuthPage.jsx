import { useState } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';


export default function AuthPage({ setUser }) {
  // const [userLogin, setUserLogin] = useState(true)
  const [userHasAccount, setUseHasAccount] = useState(true)


  return (
    <main>
      {/* <h1>AuthPage</h1> */}
      { (userHasAccount) ?
        <LoginForm setUser={setUser} setUseHasAccount={setUseHasAccount} />
        :
      <SignUpForm setUser={setUser} setUseHasAccount={setUseHasAccount} />
      
      }
    </main>
  );
}
