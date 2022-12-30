import './styles.css';
import React, { useEffect, useState } from 'react';
import EventsComponent from '../eventComponent/EventComponent';
import NewEventFormComponent from '../newEventFormComponent/NewEventFormComponent';

export default function EventsBoard() {
  const [events, setEvents] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch('http://localhost:8080/api/event')
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
      });
  }, []);

  const threeColors = ['#68B99F', '#D15A41', '#66A7CA'];
  const newArrayOfColors = [];

  while (newArrayOfColors.length < events.length) {
    for (let i = 0; i < threeColors.length; i++) {
      if (newArrayOfColors.length === events.length) {
        break;
      }
      newArrayOfColors.push(threeColors[i]);
    }
  }

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
            key={i}
            singleEvent={singleEvent}
            color={newArrayOfColors[i]}
          />
        ))}
      </div>

      <div className="button-add-event-div">
        <button className="button-add-event" onClick={() => setShow(true)}>
          {' '}
          +{' '}
        </button>
      </div>
      <NewEventFormComponent
        onClose={() => setShow(false)}
        show={show}
        setShow={setShow}
      />
    </div>
  );
}

//onSubmit={onSubmit()}
