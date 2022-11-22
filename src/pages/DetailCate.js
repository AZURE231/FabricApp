import React from "react";
import Navbar from "../components/Navigation/Navbar";
import { Link } from "react-router-dom";

function DetailCate() {
    return (
        <div>
            <Navbar />
            <h1>Detail Cate</h1>
            <Link to="/supplier">
                <button type="button">return</button>
            </Link>
        </div>
    );
}

export default DetailCate;
