import './styles.css';
import React, { useEffect, useState } from 'react';
import { CiViewList } from 'react-icons/ci';
import { apiFetch } from '../../../apiFetch';
import ToDoList from '../../ToDoList/ToDoList';
import Event from '../Event/Event';
import NewEventForm from '../NewEventForm/NewEventForm';
import { useToken } from '../../../AuthenticantionContext';

export default function EventsBoard() {
  const token = useToken()
  console.log("events board testing token", token)
  const [events, setEvents] = useState([]);
  const [show, setShow] = useState(false);
  const [showToDoList, setShowToDoList] = useState(false);
  const [timeFrame, setTimeFrame] = useState('All');
  //const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    apiFetch(`http://localhost:8080/api/events/${timeFrame}`, 'GET', null, token).then(
      (data) => {
        setEvents(data);
      },
    );
  }, [show, timeFrame]);

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
  if (!events) {
    return null;
  } else {
    return (
      <div className="events-wrapper">
        <div className="icon-div">
          {' '}
          <button className="toDo-button" onClick={() => setShowToDoList(true)}>
            <CiViewList className="check-icon" />
          </button>
        </div>

        <h3 className="event-board-title">My Events</h3>

        <div className="div-today-week-events">
          <button
            className="today-button"
            onClick={() => setTimeFrame('Today')}
          >
            Today
          </button>
          <button className="week-button" onClick={() => setTimeFrame('Week')}>
            Week
          </button>
          <button className="all-button" onClick={() => setTimeFrame('All')}>
            All
          </button>
        </div>
        <div className="events-div">
          {events.map((singleEvent, i) => (
            <Event
              key={i}
              singleEvent={singleEvent}
              color={newArrayOfColors[i]}
              events={events}
              setEvents={setEvents}
            />
          ))}
        </div>

        <div className="button-add-event-div">
          <button className="button-add-event" onClick={() => setShow(true)}>
            {' '}
            +{' '}
          </button>
        </div>
        <NewEventForm onClose={() => setShow(false)} show={show} />

        <ToDoList
          onClose={() => setShowToDoList(false)}
          showToDoList={showToDoList}
        ></ToDoList>
      </div>
    );
  }
}
