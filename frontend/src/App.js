import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CalendarPage from './pages/CalendarPage';
import GraphsPage from './pages/GraphsPage';
import HabitTrackerPage from './pages/HabitTrackerPage';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';
import YearInAGlance from './pages/YearInAGlance';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="CalendarPage" element={<CalendarPage />} />
          <Route path="HabitTracker" element={<HabitTrackerPage />} />
          <Route path="GraphsPage" element={<GraphsPage />} />
          <Route path="YearInAGlance" element={<YearInAGlance />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="Login" element={<Login />} />
          <Route path="Register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
