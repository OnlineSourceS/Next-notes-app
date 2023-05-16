"use client";
import React from "react";

const SearchBar = () => {
  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        className="rounded-l-lg p-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button className="bg-blue-700 hover:bg-blue-800 rounded-r-lg text-white px-4 py-2">
        Search
      </button>
    </>
  );
};

export default SearchBar;
