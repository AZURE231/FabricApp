import React, { useState, useEffect } from "react";
import "./SupplierList.css";
import "./CateDetail.js";
//import supplierData from "./SupplierData.json";
import axios from "axios";
import { Link } from "react-router-dom";

import CateDetail from "./CateDetail";
import SupplierForm from "./SupplierForm";

// function SupplierList() {
//     const [contacts, setContacts] = useState(supplierData);
const SupplierList = () => {
    const [supplier, setSupplier] = useState([]);

    useEffect(() => {
        getSuppliers();
    }, []);

    const getSuppliers = async () => {
        const response = await axios.get("http://localhost:5000/Supplier");
        setSupplier(response.data);
    };
    const [chooseSupplier, setChooseSupplier] = useState(false);

    return (
        <section>
            <div className="tbl-header">
                <table cellPadding="0" cellSpacing="0" border="0">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Bank account</th>
                            <th>Tax code</th>
                            <th>Category info</th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div className="tbl-content">
                <table>
                    <tbody>
                        {supplier.map((supplier) => (
                            <tr key={supplier.name} onClick={setChooseSupplier}>
                                <td>{supplier.name}</td>
                                <td>{supplier.address}</td>
                                <td>{supplier.bank_account}</td>
                                <td>{supplier.tax_code}</td>
                                {/*chooseSupplier && (
                                    <CateDetail supplierID={contact.nameSup} />
                                )*/}
                                <td>
                                    <CateDetail supplierID={supplier.id} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <SupplierForm />
        </section>
    );
};

export default SupplierList;
