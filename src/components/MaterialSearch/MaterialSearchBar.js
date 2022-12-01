import React, { useState, useEffect } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
//import "react-bootstrap-typeahead/css/Typeahead.css";
import axios from "axios";
import "../CustomerSearch/searchBar.css";

const MaterialSearchBar = ({ setselected }) => {
    const [materials, setMaterials] = useState([
        "silk",
        "khaki",
        "crewel",
        "jacquard",
        "faux silk",
        "damask",
    ]);
    const [selectedMaterial, setSelectedMaterial] = useState([]);

    return (
        <>
            <Typeahead
                className="searchBar"
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
