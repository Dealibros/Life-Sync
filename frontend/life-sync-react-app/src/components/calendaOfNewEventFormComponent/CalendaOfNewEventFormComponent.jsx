import './styles.css';
import React from 'react';
import Calendar from 'react-calendar';

const CalendaOfNewEventFormComponent = ({ onChange, value, onClickDay }) => {
  return (
    <div
      className="wrapper-time"
      style={{
        width: '23rem',
        marginLeft: '3.3rem',
        marginTop: '3.4rem',
      }}
    >
      <Calendar
        onChange={onChange}
        defaultView="month"
        value={value}
        prev2Label={null}
        next2Label={null}
        onClickDay={onClickDay}
      />
    </div>
  );
};

export default CalendaOfNewEventFormComponent;
