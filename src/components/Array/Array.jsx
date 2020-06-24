import React from 'react';
import ArrayItem from '../ArrayItem/ArrayItem';
import './Array.css';
const Array = ({ array, result }) => {
  return (
    <div className='array-container'>
      {array.map((_, i) => {
        return <ArrayItem key={i} index={i} array={array} result={result} />;
      })}
    </div>
  );
};

export default Array;
