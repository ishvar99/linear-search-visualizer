import React, { useState } from 'react';
import './SearchBox.css';
const SearchBox = ({ search, updateLoadingStatus, searchStatus }) => {
  const [value, setValue] = useState('');
  const searchElement = (e) => {
    if (e.key === 'Enter' || e === 'click') {
      if (value.trim() !== '') {
        updateLoadingStatus('loading...');
        search(parseInt(value));
      }
    }
  };
  return (
    <div className='search-box'>
      <input
        disabled={searchStatus === 'loading...' ? true : false}
        onChange={(event) => setValue(event.target.value)}
        className='search-bar'
        type='number'
        placeholder='Search a number'
        onKeyPress={(event) => searchElement(event)}
      />
      <button
        disabled={searchStatus === 'loading...' ? true : false}
        onClick={() => searchElement('click')}
        className='fa fa-search'
        id='search-button'
      ></button>
    </div>
  );
};

export default SearchBox;
