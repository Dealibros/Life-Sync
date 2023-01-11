import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import CalendarPage from './pages/CalendarPage';
import Home from './pages/Home';

export default function App() {
    return (<BrowserRouter>
            <Routes>
                <Route>
                    <Route index element={<Home/>}/>
                    <Route path="CalendarPage" element={<CalendarPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>);
}
