import React from "react";
import "bulma/css/bulma.css";

function Formfield({label, type, placeholder}) {
    return (
        <div className="field">
           <label>{label}</label>
           <input type={type} placeholder={placeholder}></input>
        </div>
    )
}

export default Formfield;