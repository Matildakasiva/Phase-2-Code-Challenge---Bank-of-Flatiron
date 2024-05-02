import React, { useState } from "react";

function Search({ transactions, onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    const searchTermValue = event.target.value
    setSearchTerm(searchTermValue);
    
    const  filtered = transactions.filter((transaction) => {
      return transaction.description.toLowercase().includes(searchTermValue.toLowerCase())
    })
    onSearch(filtered)
  };


  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        value={searchTerm}
        onChange={handleSearch}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;