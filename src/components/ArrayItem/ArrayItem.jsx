import React, { useEffect, useState } from 'react';
import './ArrayItem.css';
import ClassNames from 'classnames';
const ArrayItem = ({
  index,
  array,
  modifiedArray,
  updateLoadingStatus,
  resultIndex,
}) => {
  const [className, setClassName] = useState(['array-item']);
  useEffect(() => {
    setClassName(className.filter((e) => e !== 'shake')); // to allow react to render shake effect
    const timer = setTimeout(() => {
      if (modifiedArray.length > 0) {
        if (
          modifiedArray.some((e) => e.index === index && e.traversed === true)
        ) {
          if (resultIndex === -1 || index <= resultIndex) {
            setClassName(['array-item', 'traversed', 'shake']);
          } else {
            setClassName(['array-item', 'traversed']);
          }
        }
        if (
          modifiedArray.some(
            (e) =>
              e.index === index && e.traversed === true && e.result === true
          )
        ) {
          if (resultIndex === -1 || index < resultIndex) {
            setClassName(['array-item', 'traversed', 'scale', 'shake']);
          } else {
            setClassName(['array-item', 'traversed', 'scale']);
          }
        }
        if (
          modifiedArray.some(
            (e) =>
              e.index === index && e.traversed === false && e.result === true
          )
        ) {
          setClassName(['array-item', 'scale', 'result']);
        }
        if (index === resultIndex) {
          updateLoadingStatus(
            `${array[resultIndex]} found at index ${resultIndex}`
          );
        } else if (index === array.length - 1 && resultIndex === -1) {
          updateLoadingStatus(`Element not found!`);
        }
      }
    }, 700 * (index + 1));
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modifiedArray]);
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
