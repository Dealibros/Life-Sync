import '../styles/App.css';
import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";

function Home() {
  const API_KEY =`${process.env.REACT_APP_WEATHER_API_KEY}`
  console.log(API_KEY)

  return (
    <div className="App">
      <header className="App-header">
        <img src="/media/life_sync_logo.png" className="App-logo" alt="logo" />
        <p className="welcome-message">
          Welcome to <span className="life-sync-title">Life Sync</span></p>
        
        <Link to="calendarPage"> Let's get started! </Link>
       
      </header>
    </div>
  );
}

export default Home;
