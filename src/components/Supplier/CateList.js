import React, { useState } from "react";
import cateData from "./CateData.json";
import "./SupplierList.css";

// Render details of all categories which are provided by a supplier
function CateList() {
    const [dataCate, setDataCate] = useState(cateData);
    return (
        <div>
            <div className="tbl-header">
                <table cellPadding="0" cellSpacing="0" border="0">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div className="tbl-content">
                <table>
                    <tbody>
                        {dataCate.map((data) => (
                            <tr>
                                <td>{data.nameSup}</td>
                                <td>{data.category}</td>
                                <td>{data.dateBuy}</td>
                                <td>{data.priceBuy}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CateList;
