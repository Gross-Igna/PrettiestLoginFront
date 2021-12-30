import React from 'react';
import bgimg from '../img/login-bg-img.jpg';

const Page_Landing = () => {
    return(
        <div id="center-div">
                <img src={bgimg} id="bg-img" alt="background"></img>
                <div id="default-centered-box">
                    <h1>You are in the landing page.</h1>
                </div>
            </div>
    )
}

export default Page_Landing;