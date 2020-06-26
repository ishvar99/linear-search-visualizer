import React from 'react';
import ArrayItem from '../ArrayItem/ArrayItem';
import './Array.css';
const Array = ({ array, searchElements, updateLoadingStatus }) => {
  let resultIndex;
  if (searchElements.length > 0) {
    resultIndex = searchElements.findIndex(
      (e) => e.traversed === false && e.result === true
    );
  }
  return (
    <div className='array-container'>
      {array.map((_, i) => {
        return (
          <ArrayItem
            key={i}
            index={i}
            array={array}
            modifiedArray={searchElements}
          />
        );
      })}
      {updateLoadingStatus(
        resultIndex &&
          (resultIndex === -1
            ? 'Element not found!'
            : `Element found at index ${resultIndex}`)
      )}
    </div>
  );
};

export default Array;
