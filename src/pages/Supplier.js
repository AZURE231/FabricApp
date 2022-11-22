import React from "react";
import Navbar from "../components/Navigation/Navbar";
import SupplierList from "../components/Supplier/SupplierList";

function supplier() {
    return (
        <div>
            <Navbar />
            <h1>Supplier</h1>
            <SupplierList />
        </div>
    );
}

export default supplier;
