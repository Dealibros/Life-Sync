import './styles.css';
import { format } from 'date-fns';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { AiOutlineBell } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';
import { FiCalendar } from 'react-icons/fi';
import { GrLocation } from 'react-icons/gr';
import { CSSTransition } from 'react-transition-group';
import { apiFetch } from '../../../apiFetch';
import { INITIAL_EVENT, SORTING_TIME } from '../../../Constants';
import CalendarOfNewEventForm from '../CalendarOfNewEventForm/CalendarOfNewEventForm';
import NewEventTime from '../NewEventTime/NewEventTime';

const NewEventForm = (props) => {
  const nodeRef = React.useRef(null);
  const [newEvent, setNewEvent] = useState(INITIAL_EVENT);
  const [sortTime, setSortTime] = useState(SORTING_TIME);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    const validateForm = !Object.values(newEvent).some(
      (item) => item === null || item.length === 0,
    );
    if (validateForm) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [newEvent]);

  const createEvent = (event) => {
    event.preventDefault();
    apiFetch(
      'http://localhost:8080/api/events/newEvent',
      'POST',
      JSON.stringify(newEvent),
    );
    props.onClose();
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

  const selectStartDate = (value) => {
    const newValue = moment(value);
    const formattedValue = newValue.format('yyyy-MM-DD');

    setSortTime({
      ...sortTime,
      startingTime: { ...sortTime.startingTime, date: formattedValue },
    });
    setCalendarStartDate(value);
  };

  const selectEndDate = (value) => {
    const newValue = moment(value);
    const formattedValue = newValue.format('yyyy-MM-DD');

    setSortTime({
      ...sortTime,
      endingTime: { ...sortTime.endingTime, date: formattedValue },
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
                <CalendarOfNewEventForm
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
                <CalendarOfNewEventForm
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
              onClick={(event) => createEvent(event)}
              disabled={buttonDisabled}
            >
              Submit
            </button>
            <button className="close-button" onClick={props.onClose}>
              Close
            </button>
          </div>
          {}
        </div>
      </div>
    </CSSTransition>
  );
};

export default NewEventForm;
