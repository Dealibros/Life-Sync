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
  const [form, setForm] = useState(INITIAL_EVENT);
  const [sortTime, setSortTime] = useState(SORTING_TIME);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    if (
      form.title != null &&
      form.location != null &&
      form.description != null
    ) {
      if (
        sortTime.startingTime.time.hours != null &&
        sortTime.startingTime.time.minutes != null &&
        sortTime.startingTime.time.ap != null &&
        sortTime.endingTime.time.hours != null &&
        sortTime.endingTime.time.minutes != null &&
        sortTime.endingTime.time.ap != null
      ) {
        setButtonDisabled(false);
        console.log('changing button');

        //the setForm here seems to be causing an indefined loop
        //sortTime.startingTime
        // setForm({
        //   ...form,
        //   startingTime: formatDate(sortTime.startingTime),
        //   endingTime: formatDate(sortTime.endingTime),
        // });
        // console.log('getting into database');
      } else {
        setButtonDisabled(true);
      }
    }
  }, [form]);

  const formatDate = (sortingTime) => {
    const startingDate = new Date(sortingTime.date).toISOString().split('T')[0];
    console.log(startingDate);

    const singularDates = startingDate.split('-');
    const day = parseInt(startingDate.split('-')[2]) + 1;

    console.log(singularDates[1]);
    console.log(String(day));
    console.log(sortingTime.time.hours);
    const fullDate = moment(
      singularDates[0] +
        singularDates[1] +
        String(day) +
        sortingTime.time.hours +
        ':' +
        sortingTime.time.minutes +
        ':' +
        sortTime.startingTime.time.ap,
      'YYYY-MM-DD h:m A',
    ).format('YYYY-MM-DD HH:mm:ss.SSSSSS');
    return fullDate;
  };

  const CreateEvent = (event) => {
    event.preventDefault();
    // setStatus('loading');
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    fetch('http://localhost:8080/api/event/newEvent', {
      mode: 'cors',
      method: 'POST',
      headers: headers,
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response, 'new event');
        //show new event message
        //close modal
        // refreshEvents();
        // setStatus('created');
        setButtonDisabled(true);
      })
      .catch((error) => {
        console.log('error!', error);
        setButtonDisabled(true);
      });
  };

  const handleTitle = (value) => setForm({ ...form, title: value });
  const handleDescription = (value) => setForm({ ...form, description: value });
  const handleLocation = (value) => setForm({ ...form, location: value });
  const handleNotification = (value) =>
    setForm({ ...form, notification: value });

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

  // OK button in the calendar view
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
        startingTime: { ...form.startingTime, date: CalendarEndDate },
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
          <form>
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
                form={form}
                setForm={setForm}
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
