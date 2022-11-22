import React, { useState } from "react";
import "./SupplierList.css";
import supplierData from "./SupplierData.json";

import CateDetail from "./CateDetail";
import SupplierForm from "./SupplierForm";

function SupplierList() {
    const [detailBox, setDetailBox] = useState(false);
    const showDetailBox = () => setDetailBox(!detailBox);
    const [contacts, setContacts] = useState(supplierData);

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
                            <th>Action</th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div className="tbl-content">
                <table>
                    <tbody>
                        {contacts.map((contact) => (
                            <tr>
                                <td>{contact.nameSup}</td>
                                <td>{contact.addressSup}</td>
                                <td>{contact.bankAccount}</td>
                                <td>{contact.taxCode}</td>
                                <td>
                                    <CateDetail />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <SupplierForm />
        </section>
    );
}

export default SupplierList;
