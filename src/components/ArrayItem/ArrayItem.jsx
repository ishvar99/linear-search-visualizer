import React from 'react';
import './ArrayItem.css';
const ArrayItem = ({ index, array, modifiedArray }) => {
  let className = 'array-item';

  if (modifiedArray.length > 0) {
    if (
      modifiedArray.some(
        (e) => e.index == index && e.traversed == true && e.result == false
      )
    ) {
      className += ' traversed';
    } else if (
      modifiedArray.some(
        (e) => e.index == index && e.traversed == true && e.result == true
      )
    ) {
      className += ' result scale';
    }
  }
  return (
    <div className={className}>
      <p>{array[index]}</p>
    </div>
  );
};

export default ArrayItem;
