import React, { useState } from 'react';
import './SearchBox.css';
const SearchBox = ({ search }) => {
  const [value, setValue] = useState(null);
  return (
    <div className='search-box'>
      <input
        onChange={(event) => setValue(event.target.value)}
        className='search-bar'
        type='text'
        placeholder='Search a number'
      />
      <button
        onClick={() => search(value)}
        className='fa fa-search'
        id='search-button'
      ></button>
    </div>
  );
};

export default SearchBox;
