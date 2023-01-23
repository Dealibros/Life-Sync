import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CalendarPage from './pages/CalendarPage';
import Home from './pages/Home';
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthenticationContext } from './AuthenticantionContext';

// export const context = React.createContext()

export default function App() {

    return (
            // <context.Provider value={"vici"}>
            <AuthenticationContext>
                <BrowserRouter>
                    <Routes>
                        <Route>
                            <Route index element={<Home />} />
                            <Route path="CalendarPage" element={<CalendarPage />} />
                            <Route path="Login" element={<Login />} />
                            <Route path="Register" element={<Register />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </AuthenticationContext>
            );
}
