import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import { Route, Routes, useLocation } from 'react-router-dom';
import Contact from './pages/Contact';
import AdminPortal from './pages/AdminPortal';

const App: React.FC = () => {
  const location = useLocation();
  const isAdminPortal = location.pathname === '/admin-portal';

  return (
    <main className="w-full">
      {!isAdminPortal && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin-portal" element={<AdminPortal />} />
      </Routes>
      {!isAdminPortal && <Footer />}
    </main>
  );
};

export default App;
