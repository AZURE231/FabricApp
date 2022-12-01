import React, { useState, useEffect } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import axios from 'axios';

const MaterialSearchBar = ({setselected}) => {
  const [materials, setMaterials] = useState(['silk', 'khaki', 'crewel', 'jacquard', 'faux silk', 'damask']);
  const [selectedMaterial, setSelectedMaterial] = useState([]);

  return (
    <>
      <Typeahead
        id="basic-example"
        onChange={setSelectedMaterial}
        options={materials}
        placeholder="Enter a category ..."
        selected={selectedMaterial}
        />
      {setselected(selectedMaterial)}
    </>
  );
};
export default MaterialSearchBar;
