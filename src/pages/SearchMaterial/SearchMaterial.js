import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navigation/Navbar";
import MaterialSearchBar from "../../components/MaterialSearch/MaterialSearchBar";
import axios from "axios";

function OrderReport() {
    // const [customerOrders, setCustomerOrders] = useState([]);
    // const [selectedCustomer, setSelectedCustomer] = useState([]);
    const [selectedMaterial, setSelectedMaterial] = useState("");
    const [materialInfos, setmaterialInfos] = useState([{}])

    useEffect(() => {
        let body = selectedMaterial;
        axios.post("http://localhost:5000/getMaterialInfo", body).then(response => {setmaterialInfos(response.data)});
      }, [selectedMaterial])

    const renderTable = () => {
        return (
            <table className="table table-hover table-bordered mt-5">
                <thead>
                    <tr>
                        <th scope="col">Category Color</th>
                        <th scope="col">Supplier</th>
                        <th scope="col">Selling Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Supplied Date</th>
                    </tr>
                 </thead>
                <tbody>
                    {materialInfos.map(info => (
                        <tr>
                            <td>{info.category_color}</td>
                            <td>{info.supplier_id}</td>
                            <td>{info.selling_price}</td>
                            <td>{info.quantity}</td>
                            <td>{info.supplied_date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
    
    return (
        <div>
            <Navbar />
            <div
                style={{
                    width:'80%',
                    margin: '0 auto'
                }}
            >
                <MaterialSearchBar setselected={setSelectedMaterial}/>
                {renderTable()}
            </div>
            
        </div>
    );
}

export default OrderReport;
