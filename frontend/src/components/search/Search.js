import React from "react";

function Search(props) {
  return (
    <div>
      <input
        data-testid="input"
        type="text"
        className="searchInput"
        placeholder="Enter City or Country"
        onChange={props.onChange}
        value={props.query}
        onKeyPress={props.search}
      />
    </div>
  );
}

export default Search;
