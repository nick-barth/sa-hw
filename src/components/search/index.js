import React, { useState, useEffect } from "react";
import useDebounce from "../../hooks/useDebounce";

import "./styles.css";

function Search({ callback }) {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  useEffect(
    () => {
      callback(debouncedSearchTerm);
    },
    [debouncedSearchTerm] // Only call effect if debounced search term changes
  );
  return (
    <>
      Search
      <input
        className="Search__input"
        placeholder="search here"
        type="text"
        onChange={e => setSearchTerm(e.target.value)}
      ></input>
    </>
  );
}

export default Search;
