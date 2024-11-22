import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from './scenes/global/Sidebar';
import LandingPage from './scenes/LandingPage';
import LoginForm from './scenes/LoginForm';
import ProfilePage from './scenes/Profile';
import HomePage from './scenes/HomePage';
import AirDashboard from './scenes/AirDashboard';
import RiverDashboard from './scenes/RiverDashboard';
import SoilDashboard from './scenes/SoilDashboard';
import CalendarComponent from './scenes/Calendar';

// Pages for additional features
import AirQuality from './components/iot/AirQuality/AirQuality';
import AirQualityByDate from './components/iot/AirQuality/AirQualityByDate';
import AirQualityInstance from './components/iot/AirQuality/AirQualityInstance';

const AppContent = () => {
  const location = useLocation();

  // Define paths that require the Sidebar
  const sidebarPaths = [
    '/',
    '/profilepage',
    '/airdashboard',
    '/riverdashboard',
    '/soildashboard',
    '/calendar',
    '/homepage'
  ];

  // Check if the current route is in the sidebarPaths array
  const showSidebar = sidebarPaths.includes(location.pathname);

  return (
    <div className="app-layout" style={{ display: 'flex' }}>
      {showSidebar && <Sidebar />}
      <div className="main-content" style={{ flex: 1 }}>
        <Routes>
          {/* Public Routes */}
          <Route path="/landingpage" element={<LandingPage />} />
          <Route path="/login" element={<LoginForm />} />

          {/* Private Routes */}
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/airdashboard" element={<AirDashboard />} />
          <Route path="/riverdashboard" element={<RiverDashboard />} />
          <Route path="/soildashboard" element={<SoilDashboard />} />
          <Route path="/calendar" element={<CalendarComponent />} />
          
          

          {/* IoT Feature Routes */}
          <Route path="/air-quality" element={<AirQuality />} />
          <Route path="/air-quality/date/:date" element={<AirQualityByDate />} />
          <Route path="/air-quality/id/:id" element={<AirQualityInstance />} />

          {/* Profile Route */}
          <Route path="/profilepage" element={<ProfilePage />} />
        </Routes>
      </div>
    </div>
  );
};

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
