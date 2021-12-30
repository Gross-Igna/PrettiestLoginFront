import Lottie from "lottie-react";
import loading from "../img/loading-dots.json";
import React from 'react';

const style = {
    height: 300,
};

const Example = () => {

  return <Lottie 
    style={style}
    animationData={loading} 
  />;
  
};

export default Example;