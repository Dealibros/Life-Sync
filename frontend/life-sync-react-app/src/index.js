import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewPage from './pages/NewPage';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Home />} />
           <Route path="newpage" element={<NewPage />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

root.render(<App />);
reportWebVitals();


