import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Navbar from "./features/Navbar/Navbar";
import AppRouter from "./features/Router/AppRouter";

function App() {


  return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <AppRouter/>
        </div>
      </BrowserRouter>
  );
}

export default App;
