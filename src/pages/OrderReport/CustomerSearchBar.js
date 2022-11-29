import { Typeahead } from 'react-bootstrap-typeahead';
import Table from 'react-bootstrap/Table';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CustomerSearchBar() {
    const [options, setOptions] = useState([]);
    const [lumxum, setLumXum] = useState([]);
    const [selected, setSelected] = useState([]);

    const renderTable = (category) => {
      return (
        <Table 
            striped bordered hover
            className='mt-5'
          >
            <thead>
              <tr>
                <th colSpan={4}>{category}</th>
              </tr>
              <tr>
                <th>OrderID</th>
                <th>Color</th>
                <th>Length</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ord000004</td>
                <td>#000000</td>
                <td>12000</td>
                <td>5000000</td>
              </tr>
              <tr>
                <td>ord000004</td>
                <td>#000000</td>
                <td>12000</td>
                <td>5000000</td>
              </tr>
              <tr>
                <td>ord000004</td>
                <td>#000000</td>
                <td>12000</td>
                <td>5000000</td>
              </tr>
            </tbody>
          </Table>
      );
    }

    useEffect(() => {
        axios.post("http://localhost:5000/customer").then(res => setOptions(res.data));
        // let cateid = 1;
        // let url = "http://localhost:5000/customer/" + cateid.toString();
        // axios.post(url).then(res => console.log(res.data));
    }, []);

    return (
      <>
          <Typeahead
              id="basic-example"
              onChange={setSelected}
              options={options}
              placeholder="Choose a customer ..."
              selected={selected}
          />
          {renderTable("Silk")}
          
      </>
    
  );
}

export default CustomerSearchBar;