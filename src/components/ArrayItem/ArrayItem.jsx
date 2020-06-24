import React from 'react';
import './ArrayItem.css';
const ArrayItem = ({ index, array, result }) => {
  let className = 'array-item';
  if (result.length > 0) {
    if (result.includes(index)) {
      className = 'array-item result';
    } else {
      if (index < Math.max(...result)) className = 'array-item notresult';
    }
  }
  return (
    <div className={className}>
      <p>{array[index]}</p>
    </div>
  );
};

export default ArrayItem;
