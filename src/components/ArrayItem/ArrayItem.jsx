import React from 'react';
import './ArrayItem.css';
const ArrayItem = ({ index, array, modifiedArray }) => {
  console.log(modifiedArray);
  let className = 'array-item';

  if (modifiedArray.length > 0) {
    if (
      modifiedArray.some(
        (e) => e.index == index && e.traversed == true && e.result == false
      )
    ) {
      console.log('yes');
      className = 'array-item traversed';
    } else if (
      modifiedArray.some(
        (e) => e.index == index && e.traversed == true && e.result == true
      )
    ) {
      console.log('yes');
      className = 'array-item result';
    }
  }
  return (
    <div className={className}>
      <p>{array[index]}</p>
    </div>
  );
};

export default ArrayItem;
