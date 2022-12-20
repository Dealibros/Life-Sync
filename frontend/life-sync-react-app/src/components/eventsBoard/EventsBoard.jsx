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
          {events.map((singleEvent) => (
            <EventsComponent 
            singleEvent= {singleEvent}/>
          ))}
      </div>
      );
    };

