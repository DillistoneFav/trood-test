import React from 'react';
import './App.css';
import ProgressBar from "./features/ProgressBar/ProgressBar";

import Props from "./features/Props/Props";

function App() {


  return (
    <div className="App">
        <h1>No validation there!</h1>
        <Props/>
        <ProgressBar/>
    </div>
  );
}

export default App;
