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


 

  const threeColors = ["#68B99F", "#D15A41", "#66A7CA"]
  const newArrayOfColors = [];

    while(newArrayOfColors.length < events.length){
      for (let i = 0; i < threeColors.length; i++) {
        if(newArrayOfColors.length == events.length){
          break;
        }
        newArrayOfColors.push(threeColors[i])
        }
        
    }



console.log(newArrayOfColors);



      return (
        <div className="events-wrapper">
          <h3 className="event-board-title">My Events</h3>
          <div className="div-today-week-events">
            <button className="today-button">Today</button>
            <button className="week-button">Week</button>
          </div>
          <div className="events-div">

          {events.map((singleEvent, i) => (
            <EventsComponent 
            singleEvent= {singleEvent} color={newArrayOfColors[i]} key={singleEvent.id}/>
          ))}
          
          </div>
       
          <div className="button-add-event-div"><button className="button-add-event"> + </button></div>
          
      </div>
      );
    };

