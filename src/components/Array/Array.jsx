import React, { useEffect } from 'react';
import ArrayItem from '../ArrayItem/ArrayItem';
import './Array.css';
const Array = ({ array, searchElements }) => {
  useEffect(() => {}, [searchElements]);
  return (
    <div className='array-container'>
      {array.map((_, i) => {
        /* console.log(LinearSearch(searchElements.pop(), array)); */
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
