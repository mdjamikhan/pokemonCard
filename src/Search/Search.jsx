import React from "react";
import "./search.css";

function Search() {
  return (
    <div className="search-wrapper">
      <input
        id="pokimon-name-search"
        type="text"
        placeholder="pokimon name..."
      />
    </div>
  );
}
export default Search;
