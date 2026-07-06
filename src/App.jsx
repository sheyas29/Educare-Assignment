import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MobileContainer from './components/MobileContainer';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AccountSettings from './pages/AccountSettings';

export default function App() {
  return (
    <BrowserRouter>
      <MobileContainer>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/settings" element={<AccountSettings />} />
        </Routes>
      </MobileContainer>
    </BrowserRouter>
  );
}
