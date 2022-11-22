import React from "react";
import Popup from "reactjs-popup";
import "./PopDetail.css";

function popup() {
    return (
        <div>
            <Popup
                trigger={<button> Trigger</button>}
                position="center left"
                className="popup-content"
            >
                <div>
                    dsfsfsfsfsdfsfsdfsfsfsfddddddddddddddddddddddddddddddddddddđ
                </div>
            </Popup>
        </div>
    );
}

export default popup;
