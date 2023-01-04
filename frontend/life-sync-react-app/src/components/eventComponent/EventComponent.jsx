import './styles.css';
import { format } from 'date-fns';
import parseISO from 'date-fns/parseISO';
import React, { useState } from 'react';

export default function EventsComponent({
  singleEvent,
  color,
  //setRefresh,
  //refresh,
  setEvents,
  events,
}) {
  //Keep this for For weekly use
  // console.log(parseISO(singleEvent.startingTime, "EEEE LLLL do MMM LLLL"))
  const [hover, setHover] = useState(false);

  const DeleteEvent = (eventId) => {
    fetch(`http://localhost:8080/api/event/${eventId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((response) => {
        //setRefresh(true);
        setEvents(events.filter((event) => event.eventId !== eventId));
      })
      .catch((error) => {
        console.log('error!', error);
      });
  };

  return (
    <div className="event-component" style={{ backgroundColor: color }}>
      <div className="button-div">
        <button
          className="delete-button"
          onMouseOver={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
          onClick={() => DeleteEvent(singleEvent.eventId)}
        >
          x
        </button>{' '}
      </div>

      <div className="event-content">
        <div className="time-div">
          <h5 className="time-event">
            {format(parseISO(singleEvent.startingTime), 'EEEE - dd LLL ')}
          </h5>
          <h5 className="hour-event">
            {format(parseISO(singleEvent.startingTime), 'p')}
          </h5>
        </div>
        <h5 className="title-event">{singleEvent.title}</h5>
        <h5 className="description-event">{singleEvent.description}</h5>
      </div>
    </div>
  );
}
