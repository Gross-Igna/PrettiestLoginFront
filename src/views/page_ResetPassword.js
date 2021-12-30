import React from 'react';
import PopUp from '../components/PopUp';
import {Button, Input} from 'reactstrap';
import { useParams } from 'react-router-dom';
import { requestPwdReset } from '../services/AuthUtilities';

const ResetPassword = () => {

    const {token} = useParams();
    let passr = "";
    let c_pass = "";

    function getData(val){
        if (val.target.id === "passr"){
          passr = val.target.value;
        }else{
          c_pass = val.target.value;
        }
      }

    return(
      <div id="center-div">
        <div id="child-box-loading">
        <PopUp trigger={true}>
            <h1>Password Reset</h1>
            <p>Enter your new password:</p>
            <Input style={{marginTop: -10 + 'px'}} onChange={getData}
            type="password" placeholder="Your new password" id="passr"></Input>
            <Input type="password" placeholder="Confirm your password" id="c_pass" onChange={getData}></Input>
              <Button style={{marginTop: 10 + 'px'}}
              id="btn-register-success" onClick={() => requestPwdReset(passr, c_pass, token)}>Confirm</Button>
              <p id="pwdResetError"></p>
        </PopUp>
        </div>
      </div>
    )

}

export default ResetPassword;