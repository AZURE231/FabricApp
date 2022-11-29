import React, { useState } from "react";
import "./SupplierForm.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
     
const AddSupplier = () => {
    const [id, setID] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [bank_account, setBankaccount] = useState("");
    const [tax_code, setTaxcode] = useState("");
    const navigate = useNavigate();
   
    const saveSupplier = async (e) => {
      e.preventDefault();
      try {
        await axios.post("http://localhost:5000/Supplier", {
        id,
          name,
          address,
          bank_account,
          tax_code
        });
        //navigate("/");
      } catch (error) {
        console.log(error);
      }
    };
    const [showForm, setShowForm] = useState(false);
    const showFormHandle = () => {
        setShowForm(!showForm);
    };
    if (!showForm) {
        return (
            <div className="new-supplier">
                <button onClick={showFormHandle}>Add new supplier</button>
            </div>
        );
    } else {
    
        return (
            <div className="new-supplier">
                <form onSubmit={saveSupplier}>
                <div className="new-supplier__controls">
                        <div className="new-supplier__control">
                            <label>Supplier ID</label>
                            <input
                                type="text"
                                className="input"
                                value={id}
                                required="required"
                                placeholder="Enter ID"
                                onChange={(e) => setID(e.target.value)}
                            ></input>
                        </div>
                    </div>
                    <div className="new-supplier__controls">
                        <div className="new-supplier__control">
                            <label>Supplier name</label>
                            <input
                                type="text"
                                className="input"
                                value={name}
                                required="required"
                                placeholder="Enter a name"
                                onChange={(e) => setName(e.target.value)}
                            ></input>
                        </div>
                    </div>
                    <div className="new-supplier__controls">
                        <div className="new-supplier__control">
                            <label>Supplier address</label>
                            <input
                                type="text"
                                className="input"
                                value={address}
                                required="required"
                                placeholder="Enter an address"
                                onChange={(e) => setAddress(e.target.value)}
                            ></input>
                        </div>
                    </div>
                    <div className="new-supplier__controls">
                        <div className="new-supplier__control">
                            <label>Supplier bank account</label>
                            <input
                                type="text"
                                className="input"
                                value={bank_account}
                                required="required"
                                placeholder="Enter a bank account"
                                onChange={(e) => setBankaccount(e.target.value)}
                            ></input>
                        </div>
                    </div>
                    <div className="new-supplier__controls">
                        <div className="new-supplier__control">
                            <label>Supplier tax code</label>
                            <input
                                type="text"
                                className="input"
                                value={tax_code}
                                required="required"
                                placeholder="Enter a tax code"
                                onChange={(e) => setTaxcode(e.target.value)}
                            ></input>
                        </div>
                    </div>
                    <button type="submit">Add</button>
                    <button onClick={showFormHandle}>Cancel</button>
                </form>
            </div>
        );
        }
    }
export default AddSupplier;
