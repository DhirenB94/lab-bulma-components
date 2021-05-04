import React from "react";
import "bulma/css/bulma.css";

function CoolButton ({children, isRed}) {
    return (
        <div>
            {isRed === true ? (
            <button class="button is-danger is-rounded">{children}</button>
            ) : ( <button class="button is-success">{children}</button>
            )}
        </div>
    )
}

export default CoolButton; 