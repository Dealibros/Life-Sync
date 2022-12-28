import './styles.css';
import { format, set } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { INITIAL_EVENT } from '../../Constants';
import CalendaOfNewEventFormComponent from '../calendaOfNewEventFormComponent/CalendaOfNewEventFormComponent';
import NewEventTime from '../newEventTime/NewEventTime';

// import { GrLocation } from "react-icons/gr";
// import {AiOutlineBell} from "react-icons/ai";

const NewEventFormComponent = (props) => {
  const nodeRef = React.useRef(null);

  const [form, setForm] = useState(INITIAL_EVENT);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [status, setStatus] = useState('idle');

  // useEffect(() => {
  //   if (form.title != null && form.start.date != null) {
  //     if (form.start.time.allday === true) {
  //       setButtonDisabled(false);
  //     } else {
  //       if (
  //         form.start.time.hours != null &&
  //         form.start.time.minutes != null &&
  //         form.start.time.ap != null &&
  //         form.end.time.hours != null &&
  //         form.end.time.minutes != null &&
  //         form.end.time.ap != null
  //       ) {
  //         setButtonDisabled(false);
  //       } else {
  //         setButtonDisabled(true);
  //       }
  //     }
  //   } else {
  //     setButtonDisabled(true);
  //   }
  // }, [form]);

  const handleTitle = (value) => setForm({ ...form, title: value });
  const handleDescription = (value) => setForm({ ...form, description: value });
  const handleLocation = (value) => setForm({ ...form, location: value });

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
    setForm({ ...form, start: { ...form.start, date: value } });
    setCalendarStartDate(value);
  };
  const selectEndDate = (value) => {
    setForm({ ...form, end: { ...form.end, date: value } });
    setCalendarEndDate(value);
  };

  // OK button in the calendar view
  const submitStartDate = (event) => {
    event.preventDefault();
    document.getElementById('calendar-form-start').style.visibility = 'hidden';

    let formatted = format(CalendarStartDate, 'EEE. MMM. d, y');
    setDisplayStartDate(formatted);
    if (form.end.date < CalendarStartDate) {
      setForm({ ...form, end: { ...form.end, date: CalendarStartDate } });
      let formatted = format(CalendarStartDate, 'EEE. MMM. d, y');
      setDisplayEndDate(formatted);
    }
  };

  const submitEndDate = (event) => {
    event.preventDefault();
    document.getElementById('calendar-form-end').style.visibility = 'hidden';
    let formatted = format(CalendarEndDate, 'EEE. MMM. d, y');
    setDisplayEndDate(formatted);
    if (form.start.date > CalendarEndDate) {
      setForm({ ...form, start: { ...form.start, date: CalendarEndDate } });
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
                  {/* <FiCalendar color='#b3b3b3' /> */}
                </div>
                {/* <BsArrowRight /> */}

                <div className="input-border">
                  <input
                    className="section-input"
                    readOnly
                    placeholder="End date"
                    onClick={() => endField()}
                    value={displayEndDate}
                  />
                  {/* <FiCalendar color='#b3b3b3' /> */}
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
              <NewEventTime form={form} setForm={setForm} />
            </section>

            <section className="section">
              <label className="label">Location</label>
              <div>
                {/* <GrLocation /> */}
                <input
                  className="section-input-second"
                  type="text"
                  placeholder="Add location"
                  onChange={(ev) => handleLocation(ev.target.value)}
                />
              </div>
            </section>

            <section className="section">
              <label className="label">Notifications</label>
              {/* <AiOutlineBell/> */}
              <input
                className="section-input-second"
                type="text"
                placeholder="Add notification"
              />
            </section>
          </form>

          <div className="modal-footer">
            <button className="submit-button" onClick={props.onSubmit}>
              {/* onClick={(ev) => CreateEvent(ev)}
          disabled={buttonDisabled} */}
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
