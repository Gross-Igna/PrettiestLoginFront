import React from 'react'
import '../css/popup.css'

function PopUp(props) {
    return (props.trigger) ? (
        <div id="popup">
            <div id="popup-child" styles={props.style}>
                { props.children }
            </div>
        </div>
    ) : "";
}

export default PopUp;
