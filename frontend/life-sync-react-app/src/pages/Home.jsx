import '../styles/App.css';
import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";

function Home() {
  
    const [data, setData] = useState([]);
    
  
    // const fetchData = () => {
    //   return fetch( "calendar?id=1")
    //       .then((response) => response.json())
    //       .then((data) => setData(data));
  
    // }

    useEffect(() => {
      

    fetch('http://localhost:8080/calendar?id=1', )
      .then(response => response.json())
      .then(data => {
        setData(data);
        

      })
  }, []);

console.log(data);

  return (
    <div className="App">
      <header className="App-header">
        <img src="/media/life_sync_logo.png" className="App-logo" alt="logo" />
        <p className="welcome-message">
          Welcome to <span className="life-sync-title">Life Sync</span></p>
        <p>{data.message}</p>
        
        <Link to="calendarPage"> Let's get started! </Link>

      </header>
    </div>
  );
}

export default Home;
