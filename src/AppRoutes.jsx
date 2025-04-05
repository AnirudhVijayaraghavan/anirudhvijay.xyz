// AppRoutes.jsx or Routes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import App from './App';
import About from './pages/About';


function AppRoutes() {
  return (
    <Routes>
      {/* The Layout wraps all routes so the canvas stays persistent */}
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<About />} />
        <Route path="contact" element={<About />} />
        {/* Additional routes go here */}
      </Route>
    </Routes>
  );
}

export default AppRoutes;