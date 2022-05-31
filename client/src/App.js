// App.js renders all the react component which is used in this project.
// App.js contains default export of App component.

// Import required modules
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Import required components for the pages.
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import OnBoarding from './pages/OnBoarding';

/* App component:
  App component is render all the pages required in this project.
  It returns BrowserRouter which helps in routing all the different pages.
  Routes: 
    /            (used to render Home component)
    /dashboard   (used to render Dashboard component)
    /onboarding  (used to render OnBoarding component)
*/

// Create App function
const App = () => {
  return (
    // Create Browser Router
    <BrowserRouter>
      {/* Create Routes */}
      <Routes>
        {/* Create path for each page */}
        <Route path={'/'} element={<Home />} />
        <Route path={'/dashboard'} element={<Dashboard />} />
        <Route path={'/onboarding'} element={<OnBoarding />} />
      </Routes>
    </BrowserRouter>
  );
};

// Export App
export default App;
