import React, {useEffect, useState} from 'react';
import {jwtValidate} from '../services/AuthUtilities'
import Loading from '../components/Loading';
import '../css/home.css';
import bgimg from '../img/login-bg-img.jpg';

//Bootstrap Imports
import 'bootstrap/dist/css/bootstrap.min.css';

function Page_Home() {

    const [auth, setAuth] = useState(-1);

    useEffect(() => {
        jwtValidate({setAuth})
    }, [])

    if(auth === -1){
        return(
            <div id="center-div">
                <div id="loading-animation">
                    <Loading id="loading-animation"/>
                </div>
            </div>
        )
    }else if (auth === 1){
        return(
            <div id="center-div">
                <img src={bgimg} id="bg-img" alt="background"></img>
                <div id="default-centered-box">
                    <h1>You are in home page.</h1>
                </div>
            </div>
        )
    }else{
        window.location.href = '/login'
    }
    
}

export default Page_Home;