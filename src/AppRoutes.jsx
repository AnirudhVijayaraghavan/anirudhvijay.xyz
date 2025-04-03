// AppRoutes.jsx or Routes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import App from './App';
import Landing from './pages/Landing';

function AppRoutes() {
  return (
    <Routes>
      {/* The Layout wraps all routes so the canvas stays persistent */}
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
        <Route path="landing" element={<Landing />} />
        {/* Additional routes go here */}
      </Route>
    </Routes>
  );
}

export default AppRoutes;