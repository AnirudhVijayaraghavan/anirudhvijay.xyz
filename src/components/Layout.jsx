import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { runMatrix } from '../matrix/matrix';
import '../csspages/Layout.css';

function Layout() {
  useEffect(() => {
    // Run matrix rain only once when Layout mounts
    runMatrix();
  }, []);

  return (
    <>
      {/* Persistent matrix rain canvas */}
      <canvas id="c"></canvas>
      {/* Render child routes */}
      <Outlet />
    </>
  );
}

export default Layout;
