import React, { useState } from "react";
import * as BiIcons from "react-icons/bi";
import { Link } from "react-router-dom";
import "./CateDetail.css";

function CateDetail() {
    const [detailBox, setDetailBox] = useState(false);
    const showDetailBox = () => setDetailBox(!detailBox);

    return (
        <div>
            <div>
                <Link to="/supplier/detailCate" className="menu-bars">
                    <BiIcons.BiDetail onClick={showDetailBox} />
                </Link>
            </div>
            {detailBox}
        </div>
    );
}

export default CateDetail;
