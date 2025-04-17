import React from 'react';
import './index.css';
import PipeAnimation from './components/PipeAnimation/PipeAnimation';
import About from './components/About/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PipeAnimation />} />

        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;

