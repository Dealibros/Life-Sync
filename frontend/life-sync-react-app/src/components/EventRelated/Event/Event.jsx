import './styles.css';
import {format} from 'date-fns';
import parseISO from 'date-fns/parseISO';
import moment from 'moment';
import React, {useState} from 'react';

export default function Event({
                                  singleEvent, color, setEvents, events,
                              }) {
    //Keep this for For weekly use
    // console.log(parseISO(singleEvent.startingTime, "EEEE LLLL do MMM LLLL"))
    const [hover, setHover] = useState(false);

    const DeleteEvent = (eventId) => {
        fetch(`http://localhost:8080/api/events/${eventId}`, {
            method: 'DELETE', headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((response) => {
                setEvents(events.filter((event) => event.eventId !== eventId));
            })
            .catch((error) => {
                console.log('error!', error);
            });
    };

    const past = singleEvent.endingTime < moment(new Date()).format('yyyy-MM-DDTHH:mm:ss');
    return (<div
            className="event-component"
            style={{backgroundColor: color, opacity: past ? '.3' : ''}}
        >
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
                </button>
                {' '}
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
        </div>);
}
