import React, { useState, useEffect } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import axios from 'axios';

const CustomerSearchBar = ({setSelectedCustomer}) => {
  const [customerNames, setcustomerNames] = useState([]);
  const [selectedCustomerName, setSelectedCustomerName] = useState([]);

  useEffect(() => {
    axios.post("http://localhost:5000/getCustomerNames").then(response => setcustomerNames(response.data));
  }, [])

  return (
    <>
      <Typeahead
        id="basic-example"
        onChange={setSelectedCustomerName}
        options={customerNames}
        placeholder="Enter a customer name ..."
        selected={selectedCustomerName}
        />
      {setSelectedCustomer(selectedCustomerName)}
    </>
  );
};
export default CustomerSearchBar;
