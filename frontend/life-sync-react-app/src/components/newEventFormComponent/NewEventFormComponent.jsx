import './styles.css';
import { format } from 'date-fns';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { AiOutlineBell } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';
import { FiCalendar } from 'react-icons/fi';
import { GrLocation } from 'react-icons/gr';
import { CSSTransition } from 'react-transition-group';
import { INITIAL_EVENT, SORTING_TIME } from '../../Constants';
import CalendaOfNewEventFormComponent from '../calendaOfNewEventFormComponent/CalendaOfNewEventFormComponent';
import NewEventTime from '../newEventTime/NewEventTime';

const NewEventFormComponent = (props) => {
  const nodeRef = React.useRef(null);
  const [newEvent, setNewEvent] = useState(INITIAL_EVENT);
  const [sortTime, setSortTime] = useState(SORTING_TIME);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (
      newEvent.title != null &&
      newEvent.location != null &&
      newEvent.description != null &&
      newEvent.notification != null
    ) {
      if (
        sortTime.startingTime.time.hours != null &&
        sortTime.startingTime.time.minutes != null &&
        sortTime.startingTime.time.ap != null &&
        sortTime.endingTime.time.hours != null &&
        sortTime.endingTime.time.minutes != null &&
        sortTime.endingTime.time.ap != null
      ) {
        console.log('all fields checked');
        setButtonDisabled(false);
        setReady(true);
        console.log('formSaved ', newEvent);
        console.log('timeSaved ', sortTime);
      } else {
        setButtonDisabled(true);
      }
    }
  }, [sortTime]);

  const formatDate = (timeValue) => {
    const time = new Date(timeValue.date);
    const okTime =
      time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate();

    const fullDate = moment(
      okTime +
        timeValue.time.hours +
        ':' +
        timeValue.time.minutes +
        ':' +
        timeValue.time.ap,
      'yyyy-MM-DD h:m A',
    ).format('yyyy-MM-DDTHH:mm:ss');
    return fullDate;
  };

  useEffect(() => {
    if (ready) {
      console.log('ready to set the form');
      setNewEvent({
        ...newEvent,
        startingTime: formatDate(sortTime.startingTime),
        endingTime: formatDate(sortTime.endingTime),
      });
    }
  }, [ready, sortTime.endingTime, sortTime.startingTime]);

  const CreateEvent = (event) => {
    event.preventDefault();
    fetch('http://localhost:8080/api/event/newEvent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(newEvent),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response.json());
        console.log(response);
        console.log('post send');

        // TODO Here a new event message needs to be trigger
        // TODO close modal
        // TODO refreshEvents?
        setButtonDisabled(true);
      })
      .catch((error) => {
        console.log('error!', error);
        setButtonDisabled(true);
      });
  };

  const handleTitle = (value) => setNewEvent({ ...newEvent, title: value });
  const handleDescription = (value) =>
    setNewEvent({ ...newEvent, description: value });
  const handleLocation = (value) =>
    setNewEvent({ ...newEvent, location: value });
  const handleNotification = (value) =>
    setNewEvent({ ...newEvent, notification: value });

  //Select start & end date input fields
  const [displayStartDate, setDisplayStartDate] = useState('');
  const [displayEndDate, setDisplayEndDate] = useState('');

  const startField = () => {
    document.getElementById('calendar-form-start').style.visibility = 'visible';
  };
  const endField = () => {
    document.getElementById('calendar-form-end').style.visibility = 'visible';
  };

  //Calendar states and Functions
  const [CalendarStartDate, setCalendarStartDate] = useState(new Date());
  const [CalendarEndDate, setCalendarEndDate] = useState(new Date());

  const onStartCalendarChange = (nextValue) => setCalendarStartDate(nextValue);
  const onEndCalendarChange = (nextValue) => setCalendarEndDate(nextValue);

  //Select date value
  const selectStartDate = (value) => {
    setSortTime({
      ...sortTime,
      startingTime: { ...sortTime.startingTime, date: value },
    });
    setCalendarStartDate(value);
  };

  const selectEndDate = (value) => {
    setSortTime({
      ...sortTime,
      endingTime: { ...sortTime.endingTime, date: value },
    });
    setCalendarEndDate(value);
  };

  const submitStartDate = (event) => {
    event.preventDefault();
    document.getElementById('calendar-form-start').style.visibility = 'hidden';

    let formatted = format(CalendarStartDate, 'EEE. MMM. d, y');
    setDisplayStartDate(formatted);
    if (sortTime.endingTime.date < CalendarStartDate) {
      setSortTime({
        ...sortTime,
        endingTime: { ...sortTime.endingTime, date: CalendarStartDate },
      });
      let formatted = format(CalendarStartDate, 'EEE. MMM. d, y');
      setDisplayEndDate(formatted);
    }
  };

  const submitEndDate = (event) => {
    event.preventDefault();
    document.getElementById('calendar-form-end').style.visibility = 'hidden';
    let formatted = format(CalendarEndDate, 'EEE. MMM. d, y');
    setDisplayEndDate(formatted);
    if (sortTime.startingTime.date > CalendarEndDate) {
      setSortTime({
        ...sortTime,
        startingTime: { ...sortTime.startingTime, date: CalendarEndDate },
      });
      let formatted = format(CalendarEndDate, 'EEE. MMM. d, y');
      setDisplayStartDate(formatted);
    }
  };

  return (
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
      nodeRef={nodeRef}
    >
      <div
        className={`new-event-modal ${props.show ? 'show' : ''}}`}
        onClick={props.onClose}
        ref={nodeRef}
      >
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <form className="center-form">
            <div className="top">
              <div className="modal-header">
                <h4 className="modal-title">Create Event</h4>
              </div>

              <div className="modal-body">
                <input
                  className="event-title"
                  type="text"
                  placeholder="Your event title"
                  onChange={(ev) => handleTitle(ev.target.value)}
                ></input>

                <input
                  className="event-description"
                  type="text"
                  placeholder="Description"
                  onChange={(ev) => handleDescription(ev.target.value)}
                ></input>
              </div>
            </div>

            <section className="section">
              <label className="label">Date</label>
              <div className="date-time-input-section">
                <div className="input-border">
                  <input
                    className="section-input"
                    readOnly
                    placeholder="Start date"
                    onClick={() => startField()}
                    value={displayStartDate}
                  />
                  <FiCalendar color="#b3b3b3" />
                </div>
                <BsArrowRight className="arrowRight" />

                <div className="input-border">
                  <input
                    className="section-input"
                    readOnly
                    placeholder="End date"
                    onClick={() => endField()}
                    value={displayEndDate}
                  />
                  <FiCalendar color="#b3b3b3" />
                </div>
              </div>

              <div id="calendar-form-start">
                <CalendaOfNewEventFormComponent
                  onChange={onStartCalendarChange}
                  value={CalendarStartDate}
                  onClickDay={(value, event) => selectStartDate(value, event)}
                />
                <div className="button-box">
                  <button
                    className="button-start-end"
                    onClick={(event) => submitStartDate(event)}
                  >
                    Ok
                  </button>
                </div>
              </div>

              <div id="calendar-form-end">
                <CalendaOfNewEventFormComponent
                  onChange={onEndCalendarChange}
                  value={CalendarEndDate}
                  onClickDay={(value, event) => selectEndDate(value, event)}
                />
                <div className="button-box">
                  <button
                    className="button-start-end"
                    onClick={(event) => submitEndDate(event)}
                  >
                    Ok
                  </button>
                </div>
              </div>
            </section>

            <section className="section section-time">
              <NewEventTime
                newEvent={newEvent}
                setNewEvent={setNewEvent}
                sortTime={sortTime}
                setSortTime={setSortTime}
              />
            </section>

            <section className="section">
              <label className="label">Location</label>
              <div className="label-div">
                <GrLocation className="svg" />
                <input
                  className="section-input-second"
                  type="text"
                  placeholder="Add location"
                  onChange={(ev) => handleLocation(ev.target.value)}
                />
              </div>
            </section>

            <section className="section-bottom">
              <label className="label">Notifications</label>
              <div className="label-div">
                <AiOutlineBell className="svg" />
                <input
                  className="section-input-second"
                  type="text"
                  placeholder="Add notification"
                  onChange={(ev) => handleNotification(ev.target.value)}
                />
              </div>
            </section>
          </form>

          <div className="modal-footer">
            <button
              className="submit-button"
              // onClick={props.onSubmit}
              onClick={(ev) => CreateEvent(ev)}
              disabled={buttonDisabled}
            >
              {/* disabled={buttonDisabled} */}
              Submit
            </button>
            <button className="close-button" onClick={props.onClose}>
              Close
            </button>
          </div>

          {/* <ConfirmationBox>
        <FcCheckmark /> Your event was added to your calendar!
        </ConfirmationBox>  */}
        </div>
      </div>
    </CSSTransition>
  );
};

export default NewEventFormComponent;
