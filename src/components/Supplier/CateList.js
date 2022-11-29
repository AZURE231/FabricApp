import React, { useState, useEffect } from "react";
//import cateData from "./CateData.json";
import "./CateDetail.css";
import axios from "axios";

// Render details of all categories which are provided by a supplier
// function CateList(props) {
//     const [dataCate, setDataCate] = useState(cateData);
const CateList = (props) => {
    const [catemodel, setCatemodel] = useState([]);
   
    useEffect(() => {
      getCatemodels();
    }, []);
   
    const getCatemodels = async () => {
      const response = await axios.get("http://localhost:5000/Catemodel");
      setCatemodel(response.data);
    };
    return (
        <div>
            <div className="tbl-header">
                <table cellPadding="0" cellSpacing="0" border="0">
                    <thead>
                        <tr>
                            <th>Supplier ID</th>
                            <th>Category ID</th>
                            <th>Total payment</th>
                            <th>Color</th>
                            <th>Date</th>
                            <th>Selling price</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div className="tbl-content">
                <table>
                    <tbody>
                        {catemodel.filter((sup)=>{
                            return catemodel.supplier_id = props.supplierID
                        }).map((catemodel) => (
                            <tr key={props.supplierID}>
                                <td>{catemodel.supplier_id}</td>
                                <td>{catemodel.id}</td>
                                <td>{catemodel.totalpayment}</td>
                                <td>{catemodel.color}</td>
                                <td>{catemodel.date}</td>
                                <td>{catemodel.selling_price}</td>
                                <td>{catemodel.quantity}</td>
                            </tr>
                        ))}
                        {/*catemodel.map((catemodel) => (
                            <tr key={props.supplier_id}>
                                <td>{catemodel.supplier_id}</td>
                                <td>{catemodel.id}</td>
                                <td>{catemodel.totalpayment}</td>
                                <td>{catemodel.color}</td>
                                <td>{catemodel.date}</td>
                                <td>{catemodel.selling_price}</td>
                                <td>{catemodel.quantity}</td>
                            </tr>
                        ))*/}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default CateList;
