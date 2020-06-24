import React from 'react';
import './SearchBox.css';
const SearchBox = () => {
  return (
    <div className='search-box'>
      <input className='search-bar' type='text' placeholder='Search a number' />
      <button className='fa fa-search' id='search-button'></button>
    </div>
  );
};

export default SearchBox;
