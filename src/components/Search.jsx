import React from "react";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search">
      <div>
        <img src="searchMovie.svg" alt="search" />
        <input type="text" placeholder="Search through thousands of movies" />
      </div>
    </div>
  );
};

export default Search;
