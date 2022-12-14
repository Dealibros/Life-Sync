import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CalendarPage from './pages/CalendarPage';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Home />} />
           <Route path="CalendarPage" element={<CalendarPage />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

