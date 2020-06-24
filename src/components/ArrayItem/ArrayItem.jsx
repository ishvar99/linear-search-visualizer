import React from 'react';
import './ArrayItem.css';
const ArrayItem = ({ item, result }) => {
  let className = '';
  if (item == result) {
    className = 'result';
  }
  return (
    <div className='array-item'>
      <p className={className}>{item}</p>
    </div>
  );
};

export default ArrayItem;
