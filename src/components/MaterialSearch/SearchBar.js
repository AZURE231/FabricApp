import React, { useState } from "react";
import * as BsIcons from "react-icons/bs";
import "./SearchBar.css";

function SearchBar() {
    const category = [
        "Silk",
        "Khaki",
        "Damask",
        "Jacquard",
        "Faux silk",
        "Crewel",
    ];
    const [filteredList, setFilteredList] = new useState(category);

    const filterBySearch = (event) => {
        // Access input value
        const query = event.target.value;
        // Create copy of item list
        var updatedList = [...category];
        // Include all elements which includes the search query
        updatedList = updatedList.filter((item) => {
            return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });
        // Trigger render with updated values
        setFilteredList(updatedList);
    };

    return (
        <div>
            <div>
                <h1>Search Material</h1>
            </div>
            <form className="example" action="action_page.php">
                <input
                    type="text"
                    placeholder="Search material"
                    name="search"
                    onChange={filterBySearch}
                />
                <button type="submit">
                    <BsIcons.BsSearch />
                </button>
            </form>
            <div className="category">
                <ul>
                    {filteredList.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default SearchBar;
