import React from "react";
import Navbar from "../../components/Navigation/Navbar";
import CustomerSearchBar from "./CustomerSearchBar";

function OrderReport() {
    return (
        <div>
            <Navbar />
            <div
                style={{
                    width:'80%',
                    float: 'right',
                }}
            >
                <div
                    style={{
                        width:'80%',
                        margin: '0 auto'
                    }}
                >
                    <CustomerSearchBar/>
                </div>
            </div>
        </div>
    );
}

export default OrderReport;
