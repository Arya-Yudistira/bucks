import React from 'react';
import './App.css';
import Home from './Pages';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import SigninPage from './Pages/signin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/signin" element={<SigninPage />} exact />
      </Routes>      
    </Router>
  );
}

export default App;
