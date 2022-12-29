import './styles.css';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { HOURS, MINUTES } from '../../Constants';

const NewEventTime = ({ newEvent, sortTime, setSortTime }) => {
  // const onDayChanged = (value) => {
  //   setSortTime({
  //     ...sortTime,
  //     startingTime: {
  //       ...sortTime.startingTime,
  //       time: { ...sortTime.startingTime.time, day: value },
  //     },

  //     endingTime: {
  //       ...sortTime.endingTime,
  //       time: { ...sortTime.endingTime.time, day: value },
  //     },
  //   });
  // };

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
  };
  return (
    <>
      <div className="time-section">
        <label className="time-label">Time</label>{' '}
        <div className="time-minute-div">
          <div>
            <select
              className="time-box"
              onChange={(ev) => onStartHourChange(ev.target.value)}
            >
              <option className="option" hidden></option>
              {HOURS.map((hour, i) => (
                <option key={i} className="option">
                  {hour}
                </option>
              ))}
            </select>
            :
            <select
              className="time-box"
              onChange={(ev) => onStartMinChange(ev.target.value)}
            >
              <option className="option" hidden></option>
              {MINUTES.map((min, i) => (
                <option key={i} className="option">
                  {min}
                </option>
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

          <BsArrowRight className="arrow-right" />

          <div>
            <select
              className="time-box"
              onChange={(ev) => onEndHourChange(ev.target.value)}
            >
              <option className="option" hidden></option>
              {HOURS.map((hour, i) => (
                <option key={i}>{hour}</option>
              ))}
            </select>
            :
            <select
              className="time-box"
              onChange={(ev) => onEndMinChange(ev.target.value)}
            >
              <option className="option" hidden></option>
              {MINUTES.map((min, i) => (
                <option key={i}>{min}</option>
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
