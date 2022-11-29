import React, { useState , useEffect} from "react";
import "./SupplierList.css";
import supplierData from "./SupplierData.json";
import axios from "axios";

import CateDetail from "./CateDetail";
import SupplierForm from "./SupplierForm";

function SupplierList() {
    const [contacts, setContacts] = useState(supplierData);
    const [chooseSupplier, setChooseSupplier] = useState(false);
    const [suppliers, setSuppliers] = useState([{}]);

    useEffect(() => {
        axios.post("http://localhost:5000/").then(res => setSuppliers(res.data))
    }, []);

    return (
        <section>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Bank account</th>
                        <th>Tax code</th>
                    </tr>
                </thead>
                <tbody>
                    {suppliers.map((supplier) => (
                            <tr
                                key={supplier.id}
                                onClick={setChooseSupplier}
                            >
                                <td>{supplier.id}</td>
                                <td>{supplier.name}</td>
                                <td>{supplier.address}</td>
                                <td>{supplier.bank_account}</td>
                            </tr>
                        ))}
                </tbody>
            </table>


            <SupplierForm />
        </section>
    );
}

export default SupplierList;
