import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Features from './pages/Features';
import Roadmap from './pages/Roadmap';
import Team from './pages/Team';
import Download from './pages/Download';
import Trailer from './pages/Trailer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0a0a0a] text-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/team" element={<Team />} />
          <Route path="/download" element={<Download />} />
          <Route path="/trailer" element={<Trailer />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;