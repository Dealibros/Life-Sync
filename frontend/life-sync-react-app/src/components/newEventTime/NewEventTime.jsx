import React from 'react';
import { HOURS, MINUTES } from '../../Constants';

// import { BsArrowRight } from "react-icons/bs";

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
        <section>
          <label className="Time-label">Time</label>{' '}
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
            <select onChange={(ev) => onStartHourChange(ev.target.value)}>
              <option hidden></option>
              {HOURS.map((hour) => (
                <option>{hour}</option>
              ))}
            </select>
            :
            <select onChange={(ev) => onStartMinChange(ev.target.value)}>
              <option hidden></option>
              {MINUTES.map((min) => (
                <option>{min}</option>
              ))}
            </select>
            :
            <select onChange={(ev) => onStartAPChange(ev.target.value)}>
              <option hidden></option>
              <option>AM</option>
              <option>PM</option>
            </select>
          </div>

          <div>
            <select onChange={(ev) => onEndHourChange(ev.target.value)}>
              <option hidden></option>
              {HOURS.map((hour) => (
                <option>{hour}</option>
              ))}
            </select>
            :
            <select onChange={(ev) => onEndMinChange(ev.target.value)}>
              <option hidden></option>
              {MINUTES.map((min) => (
                <option>{min}</option>
              ))}
            </select>
            :
            <select onChange={(ev) => onEndAPChange(ev.target.value)}>
              <option hidden></option>
              <option>AM</option>
              <option>PM</option>
            </select>
          </div>
        </div>
        <div>{/* <BsArrowRight /> */}</div>
      </div>
    </>
  );
};

export default NewEventTime;
