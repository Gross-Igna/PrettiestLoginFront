import React, { useEffect, useState } from 'react';
import {accountActivate} from '../services/AuthUtilities'
import Loading from '../components/Loading';
import PopUp from '../components/PopUp';
import {Button} from 'reactstrap';
import { useParams } from 'react-router-dom';

const Activation = () => {

    const token = useParams();
    const [popup, setPopup] = useState(false);
    const [popupTitle, setTitle] = useState("Success!");
    const [popupText, setText] = useState("Your account has been correctly activated.");

    useEffect( () => {

        accountActivate(token, setTitle, setText, setPopup);

    }, [token])

    return(
      <div id="center-div">
        <div id="child-box-loading">
        <Loading />
        <PopUp trigger={popup} setTrigger={setPopup}>
              <h3>{popupTitle}</h3>
              <p>{popupText}</p>
              <Button id="btn-register-success" onClick={() => window.location.href = "/login"}>Continue</Button>
        </PopUp>
        </div>
      </div>
    )

}

export default Activation;