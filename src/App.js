import React, { useState } from 'react';
import './App.css';
import SearchBox from './components/SearchBox/SearchBox';
import Array from './components/Array/Array';
function App() {
  const [array, setArray] = useState([100, 67, 34, 55, 78, 89, 43, 90]);
  return (
    <div className='App'>
      <p className='header'>Linear Search Visualizer</p>
      <SearchBox />
      <Array array={array} />
    </div>
  );
}

export default App;
