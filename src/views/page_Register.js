import React, {useEffect, useState} from 'react';
import {jwtValidate} from '../services/AuthUtilities';
import Loading from '../components/Loading';
import bgimg from '../img/login-bg-img.jpg';
import '../css/register.css';
import RegisterForm from '../components/RegisterForm.js';

const Page_Register = () => {
    
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
            <RegisterForm />
        </div>
        )
    }else{
        window.location.href = "/home"
    }

}

export default Page_Register;