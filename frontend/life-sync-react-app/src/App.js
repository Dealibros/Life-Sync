import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CalendarPage from './pages/CalendarPage';
import reportWebVitals from './reportWebVitals';

//const root = ReactDOM.createRoot(document.getElementById('root'));


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

//root.render(<App />);
reportWebVitals();




// import logo from './media/life_sync_logo.png';
// import './App.css';
// import React, { useEffect, useState } from "react";


// function App() {
  
//     const [data, setData] = useState([]);
    
  
//     // const fetchData = () => {
//     //   return fetch( "calendar?id=1")
//     //       .then((response) => response.json())
//     //       .then((data) => setData(data));
  
//     // }

//     useEffect(() => {
      

//     fetch('http://localhost:8080/calendar?id=1', )
//       .then(response => response.json())
//       .then(data => {
//         setData(data);
        

//       })
//   }, []);

// console.log(data);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p className="welcome-message">
//           Welcome to <span className="life-sync-title">Life Sync</span></p>
//         <p>{data.message}</p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Let's get started!
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
