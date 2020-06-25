import React from 'react';
import ArrayItem from '../ArrayItem/ArrayItem';
import './Array.css';
const Array = ({ array, searchElements }) => {
  console.log(searchElements);
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
    </div>
  );
};

export default Array;
