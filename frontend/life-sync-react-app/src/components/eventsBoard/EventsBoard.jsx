import React, { useEffect, useState } from "react";
import EventsComponent from "../eventComponent/EventComponent";
import "./styles.css"

export default function EventsBoard() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
    
    fetch('http://localhost:8080/calendar/event', )
      .then(response => response.json())
      .then(data => {
        setEvents(data);
      })
  }, []);

      return (
        <div className="events-wrapper">
          <h3>My Events</h3>
          <div className="div-today-week-events">
            <button className="today-button">Today</button>
            <button className="week-button">Week</button>
          </div>
          {events.map((singleEvent) => (
            <EventsComponent 
            singleEvent= {singleEvent} key={singleEvent.id}/>
          ))}
          <div className="button-add-event-div"><button className="button-add-event"> + </button></div>
          
      </div>
      );
    };

