import React from "react";

const SearchBox = ({ value, setSearchValue }) => {
  return (
    <div className="col col-sm-4">
      <input
        type="text"
        value={value}
        onChange={(event) => setSearchValue(event.target.value)}
        className="form-control"
        placeholder="Type to search..."
      />
    </div>
  );
};

export default SearchBox;
