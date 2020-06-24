import React, { useState } from 'react';
import './SearchBox.css';
const SearchBox = ({ search }) => {
  const [value, setValue] = useState('');
  const searchElement = () => {
    if (value.trim() !== '') {
      search(value);
    }
  };
  return (
    <div className='search-box'>
      <input
        onChange={(event) => setValue(event.target.value)}
        className='search-bar'
        type='text'
        placeholder='Search a number'
      />
      <button
        onClick={searchElement}
        className='fa fa-search'
        id='search-button'
      ></button>
    </div>
  );
};

export default SearchBox;
