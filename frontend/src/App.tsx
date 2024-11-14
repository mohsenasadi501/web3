import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Transfer from './pages/Transfer';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transfer" element={<Transfer />} /> 
        <Route path="*" element={<NotFound />} /> {/* 404 route */}
      </Routes>
    </Router>
  );
};

export default App;