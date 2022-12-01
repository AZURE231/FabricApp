import React, { useState } from "react";
import * as BiIcons from "react-icons/bi";
import "./CateDetail.css";
import CateList from "./CateList";

// Render the popup box
function CateDetail(props) {
    const [detailBox, setDetailBox] = useState(false);
    const showDetailBox = () => {
        console.log("button clicked!");
        setDetailBox(!detailBox);
    };

    if (detailBox) {
        document.body.classList.add("active-modal");
    } else {
        document.body.classList.remove("active-modal");
    }

    return (
        <div>
            <div>
                <BiIcons.BiDetail onClick={showDetailBox} />
            </div>
            {detailBox && (
                <div className="modal">
                    <div onClick={showDetailBox} className="overlay"></div>
                    <div className="modal-content">
                        <h2>Detail information</h2>
                        <CateList supplierID={props.supplierID} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default CateDetail;
