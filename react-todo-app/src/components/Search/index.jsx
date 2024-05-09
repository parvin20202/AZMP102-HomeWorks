import React from "react";

const Search = ({ search, setSearch }) => (
  <div className="search">
    <h2>Axtaris</h2>
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Axtaris..."
    />
  </div>
);

export default Search;
