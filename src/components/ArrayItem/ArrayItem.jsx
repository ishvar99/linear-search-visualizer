import React, { useEffect, useState } from 'react';
import './ArrayItem.css';
import ClassNames from 'classnames';
const ArrayItem = ({ index, array, modifiedArray }) => {
  const [className, setClassName] = useState(['array-item']);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (modifiedArray.length > 0) {
        if (
          modifiedArray.some((e) => e.index === index && e.traversed === true)
        ) {
          setClassName([...className, 'traversed']);
        }
        if (
          modifiedArray.some(
            (e) =>
              e.index === index && e.traversed === true && e.result === true
          )
        ) {
          setClassName([...className, 'scale']);
        }
        if (
          modifiedArray.some(
            (e) =>
              e.index === index && e.traversed === false && e.result === true
          )
        ) {
          console.log('result', index);
          setClassName([...className, 'scale', 'result']);
        }
      }
    }, 500 * index);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, modifiedArray]);
  return (
    <div className={ClassNames([...new Set(className)])}>
      <p>{array[index]}</p>
      <div className='index'>
        <p>{index}</p>
      </div>
    </div>
  );
};

export default ArrayItem;
