import React from 'react';
import ArrayItem from '../ArrayItem/ArrayItem';
import './Array.css';
const Array = ({ array }) => {
  return (
    <div className='array-container'>
      {array.map((item, i) => (
        <ArrayItem key={i} item={item} />
      ))}
    </div>
  );
};

export default Array;
