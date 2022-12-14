import '../styles/App.css';
import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import calendar from "../components/calendar/Calendar" 


export default function CalendarPage() {
    const today = new Date();
    const [dayEvents, setDayEvents] = useState([]);
   
    // Getting events from events + date
    //We need to an Create Endpoint

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
     <div className="wrapper">
      <div className="top-banner">
        <div className="logo" src="/planner_logo.png" ></div>
         <div className="greeting">
          <h2 className="welcome">{greeting}</h2>
            <h3 className="main-date">{format(today, "EEEE, LLLL do").toLowerCase()}.</h3>
          </div>
      </div>
     </div>
     <h2 className="section-title"> Planner</h2>
     <div className="action-area">
      <calendar/>
    
     </div>
    </div>
  );
}


