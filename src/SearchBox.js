import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {

  return (
    <div className="pa3 ba ba--green bg-lightest-blue">
      <input
      type='search'
      placeholder='Search!!!!'
      onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;
