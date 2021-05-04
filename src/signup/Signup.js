import React from "react";
import "bulma/css/bulma.css";
import CoolButton from '../coolbutton/CoolButton';
import Formfield from '../formfield/Formfield';

function Signup() {
    return(
        <div className="signup">
            <hr/>
            <h1><b><u>Signup!</u></b></h1>
            <Formfield label="Name" type="text" placeholder="e.g Alex Smith" />
            <Formfield label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <Formfield label="Password" type="password" placeholder="Enter Password" />
            <CoolButton isRed={true}>Submit</CoolButton>
        </div>
    )
}


export default Signup; 