import React, { useContext } from 'react'
import { AuthProviderContext } from '../context/AuthProvider';
import { Link, useNavigate, useLocation } from 'react-router-dom';
type Props = {}

const Home = (props: Props) => {
  const { auth , updateUserInfo } = useContext(AuthProviderContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/login";

  const LogoutSubmit =()=>{
    console.log("LogoutSubmit click");
    updateUserInfo({username: false, quantity:""});
    console.log("userstates : ", auth.username);
    localStorage.removeItem("userstates");
    navigate(from, { replace: true });
  }

  return (
    <div>
      <h2>Home</h2>
      <button onClick={LogoutSubmit}>Logout</button>
    </div>
  
  )
}

export default Home