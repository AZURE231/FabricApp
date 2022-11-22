import React from "react";
import * as BsIcons from "react-icons/bs";
import "./SearchBar.css";

function SearchBar() {
    return (
        <div>
            <form class="example" action="action_page.php">
                <input type="text" placeholder="Search.." name="search" />
                <button type="submit">
                    <BsIcons.BsSearch />
                </button>
            </form>
        </div>
    );
}

export default SearchBar;
