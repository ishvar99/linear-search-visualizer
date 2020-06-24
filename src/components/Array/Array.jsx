import React from 'react';
import ArrayItem from '../ArrayItem/ArrayItem';
import './Array.css';
const Array = ({ array, result }) => {
  return (
    <div className='array-container'>
      {array.map((item, i) => {
        return <ArrayItem key={i} item={item} result={result} />;
      })}
    </div>
  );
};

export default Array;
