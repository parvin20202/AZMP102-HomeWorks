import React from "react";

const Filter = ({ filter, setFilter, setSort }) => {
  return (
    <div className="filter">
      <h2>Filter:</h2>
      <div className="filter-options">
        <div>
          <p>Status</p>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">Tapsiriqlar</option>
            <option value="Completed">Bitmis</option>
            <option value="Incomplete">Bitmemis</option>
          </select>
        </div>

        <div>
          <p>Siralama</p>
          <button onClick={() => setSort("Asc")}>Azdan coxa</button>
          <button onClick={() => setSort("Desc")}>Coxdan aza</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
