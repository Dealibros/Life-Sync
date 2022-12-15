import '../styles/App.css';
import React, { useEffect, useState } from "react";
import { format } from "date-fns";
// import Calendar from "../components/calendar/Calendar1"
import Calendar from 'react-calendar'; 
import 'react-calendar/dist/Calendar.css';
import '../styles/CalendarReact.css';




export default function CalendarPage() {
    const today = new Date();
    const [date, setDate] = useState(new Date());
    console.log(date)



    // const [dayEvents, setDayEvents] = useState([]);
   
    // Getting events from events + date
    //We need to an Create Endpoint

    // useEffect(() => {
    //   fetch(`/events/date/${format(today, "yyyy-MM-dd")}`)
    //     .then((res) => res.json())
    //     .then((res) => {
    //       setDayEvents(res.data);
    //       console.log("Today's events: ", res.data);
    //     })
    //     .catch((error) => console.log("error!", error));
    // }, []);
    

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
     <h2 className="section-title">Planner</h2>
     <div className="action-area">
      <div className="centerCalendar">
      <Calendar onChange={setDate} value={date} defaultView='month' maxDetail='month' 
  nextLabel='>>' 
  nextAriaLabel='Go to next month'
  next2Label='>'
  next2AriaLabel='Go to next year'
  prevLabel='<<'
  prevAriaLabel='Go to prev month'
  prev2Label='<'
  prev2AriaLabel='Go to prev year'/>
      </div>
      <div className='div-date'>
      <p className='selected-date'>
        <span className='bold'>Selected date</span> {' '}<br/>
        <strong>{date.toDateString()}</strong>
      </p>
      </div>
     </div>
    </div>
  );
}


