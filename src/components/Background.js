import React from 'react';
import backgroundImage from '../img/login-bg-img.jpg';

const Background = () =>
        ( 
            <div className="container-fluid no-padding" id="img_div">
              <img src={backgroundImage} alt="login bg img" id="bg-img"/>
            </div>
         )

export default Background;