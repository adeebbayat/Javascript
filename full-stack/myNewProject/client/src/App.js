import logo from './logo.svg';
import './App.css';
import React from 'react';
import Main from './views/Main';
import {Routes,Route,Link} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Main/>} />
      </Routes>
    </div>
  );
}

export default App;
