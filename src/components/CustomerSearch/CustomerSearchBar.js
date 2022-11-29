import React, { useState } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

import customerNames from './CustomerNames';

const TypeaheadExample = () => {
  const [selectedCustomerName, setSelectedCustomerName] = useState([]);

  return (
    <Typeahead
      id="basic-example"
      onChange={setSelectedCustomerName}
      options={customerNames}
      placeholder="Enter a customer name ..."
      selected={selectedCustomerName}
    />
  );
};
export default TypeaheadExample;
