import React, { useState } from 'react';
import './App.css';
import SearchBox from './components/SearchBox/SearchBox';
import Array from './components/Array/Array';
import LinearSearch from './LinearSearchAlgorithm/LinearSearch';
function App() {
  const [array, setArray] = useState([100, 67, 34, 55, 78, 89, 43, 90]);
  const [searchTerms, setSearchTerms] = useState([]);
  const [searchElements, setSearchElements] = useState([]);
  const [searchStatus, setSearchStatus] = useState('');
  const findElement = (val) => {
    setSearchTerms([...searchTerms, val]);
    setSearchElements(
      [...LinearSearch(searchTerms, val, array), ...searchElements].filter(
        (e, i, self) => i === self.findIndex((t) => t.index === e.index)
      )
    );
  };
  const updateLoadingStatus = (val) => {
    setSearchStatus(val);
  };
  return (
    <div className='App'>
      <p className='header'>Linear Search Visualizer</p>
      <SearchBox search={findElement} />
      <span>{searchStatus}</span>
      <Array
        array={array}
        searchElements={searchElements}
        updateLoadingStatus={updateLoadingStatus}
      />
    </div>
  );
}

export default App;
