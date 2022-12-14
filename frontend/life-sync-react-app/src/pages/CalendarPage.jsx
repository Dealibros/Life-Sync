import logo from '../media/life_sync_logo.png';
import '../styles/App.css';
import React, { useEffect, useState } from "react";
import { format } from "date-fns";

export default function CalendarPage() {
    const today = new Date();

    const [dayEvents, setDayEvents] = useState([]);
   
    // Getting events from events dat + date
    //Create Endpoint

    useEffect(() => {
      fetch(`/events/date/${format(today, "yyyy-MM-dd")}`)
        .then((res) => res.json())
        .then((res) => {
          setDayEvents(res.data);
          console.log("Today's events: ", res.data);
        })
        .catch((error) => console.log("error!", error));
    }, []);
    
  let greeting = "";
  if (today.getHours() < 12) {
    greeting = "Good morning!";
  } else if (today.getHours() < 18) {
    greeting = "Good afternoon!";
  } else {
    greeting = "Good evening!";
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="welcome-message">
            This is the second Page! Changing
          </p> 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let's get started!
        </a>
      </header>
    </div>
  );
}


