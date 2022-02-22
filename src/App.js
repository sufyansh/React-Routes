import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProjectTwo from './Components/projecttwo';
import ProjectOne from './Components/ProjectOne';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <button> Click </button>
          <Route exact path="/page" element={<ProjectTwo/>}/>
        </Routes>
        <Routes>
        <Route exact path="/" element={<ProjectOne/>}/>
        </Routes>
    </Router>
    </div>
    
  );
}

export default App;
