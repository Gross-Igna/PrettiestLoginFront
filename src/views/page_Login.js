import React, { useEffect, useState } from 'react';
import {jwtValidate} from '../services/AuthUtilities'
import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from '../components/Loading';
import Login from '../components/LoginForm'
import '../css/login.css'
import bgimg from '../img/login-bg-img.jpg';

function Main({showPopup}) {

  const [auth, setAuth] = useState(-1);

  useEffect(() => {
      jwtValidate({setAuth})
  }, [])
  
  if(auth === -1){
    return(
      <div id="center-div">
        <div id="child-box-loading">
          <Loading />
        </div>
      </div>
      )
  }else if(auth === 0){
  return (
      <div id="center-div">
        <img src={bgimg} id="bg-img" alt="background"></img>
        <div id="login-parent-box">
          <div id="login-box">
            <h1 id="login-text">Log-In!</h1>
            <Login />
          </div>
        </div>
      </div>
      )
  }else{
    window.location.href = "/home"
  }

}

export default Main;