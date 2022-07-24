import React from 'react';
import './App.module.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './pages/homepage/index';




function App() {
  return (
    <Router>
      <Home />
    </Router>
  )
}

export default App
