import React, { useState } from 'react';
import './App.css';
import SearchBox from './components/SearchBox/SearchBox';
import Array from './components/Array/Array';
import LinearSearch from './LinearSearchAlgorithm/LinearSearch';
function App() {
  const [array, setArray] = useState([100, 67, 34, 55, 78, 89, 43, 90]);
  const [result, setResult] = useState([]);
  const findElement = (val) => {
    setResult([...result, LinearSearch(val, array)]);
  };
  return (
    <div className='App'>
      <p className='header'>Linear Search Visualizer</p>
      <SearchBox search={findElement} />
      <Array array={array} result={result} />
    </div>
  );
}

export default App;
