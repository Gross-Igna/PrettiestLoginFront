import React, {Fragment, useState} from 'react';
//import axios from "axios";

//Bootstrap Imports
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form, FormGroup, Label, Input} from "reactstrap";
import {Login, pwdReset} from '../services/AuthUtilities';
import Popup from '../components/PopUp';

const Page_Login = () =>{
    const [popup, setPopup] = useState(false);

    //document.body.style.cursor = "wait";
    let username = "";
    let password = "";
    let email = "";

    function getData(val){
      if (val.target.id === "user"){
        username = val.target.value;
      }else if(val.target.id === "pass"){
        password = val.target.value;
      }else{
        email = val.target.value;
      }
    }

    return(
          <Fragment>
              <Form>
                <FormGroup>
                  <Label for="exampleEmail"><b>User:</b></Label>
                  <Input name="user" id="user" placeholder="" onChange={getData}/>
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword"><b>Password:</b></Label>
                  <Input type="password" name="pass" id="pass" placeholder="" onChange={getData}/>
                  <div className="sameline">  
                  <Button onClick={() => Login(username, password)} id="login-btn" color="success">Log In!</Button>
                  <p id="login_error"></p>
                  </div>
                  <Button id="forgotPwd" onClick={() => setPopup(true)}>
                    Help! I forgot my password</Button>
                  <Popup trigger={popup} setTrigger={setPopup} width="3000">
                    <h3>Password Reset</h3>
                    <p>In order to reset your account's password, please enter your email:</p>
                    <Input id="email" style={{marginTop: -10 + 'px'}}  onChange={getData}></Input>
                    <Button 
                      style={{marginTop: 10 + 'px'}} id="btn-register-success" 
                      onClick={() => pwdReset(email)}>Continue
                    </Button>
                    <p id="pwdResetError"></p>
                  </Popup>
                </FormGroup>    
              </Form>
              
          </Fragment> 
         )
    }

export default Page_Login;