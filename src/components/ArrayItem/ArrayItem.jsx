import React from 'react';
import './ArrayItem.css';
const ArrayItem = ({ item, result }) => {
  let className = 'array-item';
  if (item == result) {
    className += ' result';
  }
  return (
    <div className={className}>
      <p>{item}</p>
    </div>
  );
};

export default ArrayItem;
