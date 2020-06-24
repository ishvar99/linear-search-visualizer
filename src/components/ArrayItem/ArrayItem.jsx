import React from 'react';
import './ArrayItem.css';
const ArrayItem = ({ item }) => {
  return (
    <div className='array-item'>
      <p>{item}</p>
    </div>
  );
};

export default ArrayItem;
