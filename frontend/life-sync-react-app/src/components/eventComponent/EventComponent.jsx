import './styles.css';
import { format, set } from 'date-fns';
import parseISO from 'date-fns/parseISO';
import React from 'react';

export default function EventsComponent({ singleEvent, color }) {
  //Keep this for For weekly use
  // console.log(parseISO(singleEvent.startingTime, "EEEE LLLL do MMM LLLL"))

  return (
    <div className="event-component" style={{ backgroundColor: color }}>
      <div className="time-div">
        <h5 className="time-event">
          {format(parseISO(singleEvent.startingTime), 'EEEE - H LLL ')}
        </h5>
        <h5 className="hour-event">
          {format(parseISO(singleEvent.startingTime), 'p')}
        </h5>
      </div>
      <h5 className="title-event">{singleEvent.eventTitle}</h5>
      <h5 className="description-event">{singleEvent.description}</h5>
    </div>
  );
}
