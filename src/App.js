import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import InstitutesPage from './pages/InstitutesPage.js';
import StudentsPage from './pages/StudentPage';

function App() {
  return (
    <Router>
      <Header />
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<InstitutesPage />} />
          <Route path="/students" element={<StudentsPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
