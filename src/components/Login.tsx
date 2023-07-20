import React, { useContext } from 'react'
import { AuthProviderContext } from '../context/AuthProvider';
import { Link, useNavigate, useLocation } from 'react-router-dom';

type Props = {}

const Login = (props: Props) => {

  const { auth , updateUserInfo } = useContext(AuthProviderContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const LoginSubmit =()=>{
    updateUserInfo({username: true, quantity:"abc"})
    console.log("userstates : ", auth.username);
    localStorage.setItem("userstates", JSON.stringify(true));
    navigate(from, { replace: true });
  }


  return (
    <div>
      <h2>Login</h2> 
      <button onClick={LoginSubmit}>Login</button>
    </div>
  )
}

export default Login