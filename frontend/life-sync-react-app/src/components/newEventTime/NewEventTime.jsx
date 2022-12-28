import './styles.css';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { HOURS, MINUTES } from '../../Constants';

const NewEventTime = ({ form, setForm }) => {
  const allDaySelect = (checked) => {
    if (checked) {
      setForm({
        ...form,
        start: { ...form.start, time: { ...form.start.time, allday: true } },
        end: { ...form.end, time: { ...form.end.time, allday: true } },
      });
    } else {
      setForm({
        ...form,
        start: { ...form.start, time: { ...form.start.time, allday: false } },
        end: { ...form.end, time: { ...form.end.time, allday: false } },
      });
    }
  };

  console.log(form);

  const onStartHourChange = (value) => {
    setForm({
      ...form,
      start: { ...form.start, time: { ...form.start.time, hours: value } },
    });
  };
  const onStartMinChange = (value) => {
    setForm({
      ...form,
      start: { ...form.start, time: { ...form.start.time, minutes: value } },
    });
  };
  const onStartAPChange = (value) => {
    setForm({
      ...form,
      start: { ...form.start, time: { ...form.start.time, ap: value } },
    });
  };
  const onEndHourChange = (value) => {
    setForm({
      ...form,
      end: { ...form.end, time: { ...form.end.time, hours: value } },
    });
  };
  const onEndMinChange = (value) => {
    setForm({
      ...form,
      end: { ...form.end, time: { ...form.end.time, minutes: value } },
    });
  };
  const onEndAPChange = (value) => {
    setForm({
      ...form,
      end: { ...form.end, time: { ...form.end.time, ap: value } },
    });
  };

  return (
    <>
      <div className="time-section">
        <section className="time-title">
          <label className="time-label">Time</label>{' '}
          <div className="all-day-section">
            {/* <input
            type="checkbox"
            className="checkBoxBox"
            onChange={(ev) => allDaySelect(ev.target.checked)}
          /> */}
            {/* <label>All-day</label> */}
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
