import React, { useState } from "react";
import { SearchIcon } from "@heroicons/react/solid";
import "../style.css";

const Search = () => {
  const [search, setSeach] = useState("");

  const onSearch = (e) => {
    setSeach(e.target.value);
  };

  return (
    <div>
      <SearchIcon className="icon" />
      <input type="text" value={search} onChange={onSearch} />
    </div>
  );
};

export default Search;
