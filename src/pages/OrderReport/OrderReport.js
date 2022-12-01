import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navigation/Navbar";
import CustomerSearchBar from "../../components/CustomerSearch/CustomerSearchBar";
import axios from "axios";

function OrderReport() {
    const [customerOrders, setCustomerOrders] = useState([]);
    const [selectedCustomer, setSelectedCustomer] = useState([]);

    useEffect(() => {
        let body = selectedCustomer[0];
        axios.post("http://localhost:5000/getCustomerOrders", body).then(response => {setCustomerOrders(response.data)});
      }, [selectedCustomer])

    const renderOrdersTable = () => {
        return (
            <table className="table table-hover table-bordered mt-5">
                <thead>
                    <tr>
                        <th scope="col">OrderID</th>
                        <th scope="col">BoltID</th>
                        <th scope="col">Category</th>
                        <th scope="col">Color</th>
                        <th scope="col">Length</th>
                        <th scope="col">Total price</th>
                    </tr>
                 </thead>
                <tbody>
                    {customerOrders.map(order => (
                        <tr>
                            <td>{order.order_id}</td>
                            <td>{order.bolt_id}</td>
                            <td>{order.category}</td>
                            <td>{order.category_color}</td>
                            <td>{order.length}</td>
                            <td>{order.price}</td>
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
                <CustomerSearchBar setSelectedCustomer = {setSelectedCustomer}/>
                {selectedCustomer && renderOrdersTable()}
            </div>
            
        </div>
    );
}

export default OrderReport;
