import './styles.css';
// import moment from 'moment';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { HOURS, MINUTES } from '../../Constants';

const NewEventTime = ({ form, setForm, sortTime, setSortTime }) => {
  console.log(sortTime);

  const onDayChanged = (value) => {
    setSortTime({
      ...sortTime,

      startingTime: {
        ...sortTime.startingTime,
        time: { ...sortTime.startingTime.time, day: value },
      },

      endingTime: {
        ...sortTime.endingTime,
        time: { ...sortTime.endingTime.time, day: value },
      },
    });
  };

  const onStartHourChange = (value) => {
    setSortTime({
      ...sortTime,
      startingTime: {
        ...sortTime.startingTime,
        time: { ...sortTime.startingTime.time, hours: value },
      },
    });
  };

  const onStartMinChange = (value) => {
    setSortTime({
      ...sortTime,
      startingTime: {
        ...sortTime.startingTime,
        time: { ...sortTime.startingTime.time, minutes: value },
      },
    });
  };

  const onStartAPChange = (value) => {
    setSortTime({
      ...sortTime,
      startingTime: {
        ...sortTime.startingTime,
        time: { ...sortTime.startingTime.time, ap: value },
      },
    });
  };

  const onEndHourChange = (value) => {
    setSortTime({
      ...sortTime,
      endingTime: {
        ...sortTime.endingTime,
        time: { ...sortTime.endingTime.time, hours: value },
      },
    });
  };

  const onEndMinChange = (value) => {
    setSortTime({
      ...sortTime,
      endingTime: {
        ...sortTime.endingTime,
        time: { ...sortTime.endingTime.time, minutes: value },
      },
    });
  };

  const onEndAPChange = (value) => {
    setSortTime({
      ...sortTime,
      endingTime: {
        ...sortTime.endingTime,
        time: { ...sortTime.endingTime.time, ap: value },
      },
    });

    console.log(form);
  };
  return (
    <>
      <div className="time-section">
        <section className="time-title">
          <label className="time-label">Time</label>{' '}
          <div className="all-day-section">
            <div
              className="dayDiv"
              onChange={(ev) => onDayChanged(ev.target.value)}
            />
          </div>
        </section>
        <div className="time-minute-div">
          <div>
            <select
              className="time-box"
              onChange={(ev) => onStartHourChange(ev.target.value)}
            >
              <option className="option" hidden></option>
              {HOURS.map((hour) => (
                <option className="option">{hour}</option>
              ))}
            </select>
            :
            <select
              className="time-box"
              onChange={(ev) => onStartMinChange(ev.target.value)}
            >
              <option className="option" hidden></option>
              {MINUTES.map((min) => (
                <option className="option">{min}</option>
              ))}
            </select>
            :
            <select
              className="time-box"
              onChange={(ev) => onStartAPChange(ev.target.value)}
            >
              <option className="option" hidden></option>
              <option className="option">AM</option>
              <option className="option">PM</option>
            </select>
          </div>
          <div className="arrow-right">
            <BsArrowRight />
          </div>
          <div>
            <select
              className="time-box"
              onChange={(ev) => onEndHourChange(ev.target.value)}
            >
              <option className="option" hidden></option>
              {HOURS.map((hour) => (
                <option>{hour}</option>
              ))}
            </select>
            :
            <select
              className="time-box"
              onChange={(ev) => onEndMinChange(ev.target.value)}
            >
              <option className="option" hidden></option>
              {MINUTES.map((min) => (
                <option>{min}</option>
              ))}
            </select>
            :
            <select
              className="time-box"
              onChange={(ev) => onEndAPChange(ev.target.value)}
            >
              <option className="option" hidden></option>
              <option className="option">AM</option>
              <option className="option">PM</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewEventTime;
