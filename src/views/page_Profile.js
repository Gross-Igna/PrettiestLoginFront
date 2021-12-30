import React, {useState, useEffect} from 'react';
import {Button} from 'react-bootstrap';
import {logOut, jwtValidate} from '../services/AuthUtilities';
import Loading from '../components/Loading';
import bgimg from '../img/login-bg-img.jpg';

const Page_Profile = () => {
    
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
                    <h1>You are loged in as "{localStorage.getItem("username")}"</h1>
                    <Button onClick={() => logOut()}>Log Out</Button>
                </div>
            </div>
        )
    }else{
        window.location.href = '/hello'
    }

    
}

export default Page_Profile;