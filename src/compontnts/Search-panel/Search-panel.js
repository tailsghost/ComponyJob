import { useState } from "react";

import "./Search-panel.css";

const SearchPanel = ({ onUpdateSearch }) => {
  const [search, setSearch] = useState("");

  function addSetSearch(e) {
    setSearch(e);
    onUpdateSearch(search);
  }

  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="Найти сотрудника"
      onChange={(e) => {
        addSetSearch(e.target.value);
        onUpdateSearch(e.target.value);
      }}
      value={search}
    />
  );
};

export default SearchPanel;
