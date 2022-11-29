import React from "react";
import Navbar from "../../components/Navigation/Navbar";
import TypeaheadExample from "../../components/CustomerSearch/CustomerSearchBar";

import customerOrders from './CustomerOrders';

function OrderReport() {
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
                <TypeaheadExample/>
                {renderOrdersTable()}
            </div>
            
        </div>
    );
}

export default OrderReport;
