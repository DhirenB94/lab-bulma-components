import React from "react";
import "bulma/css/bulma.css";

function Message ({title}) {
    return (
        <article class="message is-info">
            <div class="message-header">
                <p>{title}</p>
                <button class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>
            </div>
        </article>
    )
}

export default Message; 