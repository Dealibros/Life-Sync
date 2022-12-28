import React from "react";
import Calendar from "react-calendar";
import './styles.css';

const CalendaOfNewEventFormComponent = ({ onChange, value, onClickDay }) => {
  return (
    <div className="wrapper" style={{height:"5rem", width:"23rem", marginLeft:"3rem"}}>
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

// const styles = {
//   div:{
//   .react-calendar {
//     max-width: 100%;
//     background: white;
//     line-height: 2em;
//     text-align: center;
//   }
//   .react-calendar button {
//     border: none;
//     outline: none;
//     font-size: 1.3rem;
//   }
//   .react-calendar__month-view__weekdays__weekday abbr {
//     text-decoration: none;
//   }
//   .react-calendar__month-view__days__day--neighboringMonth {
//     color: #c1c7c3;
//   }
//   .react-calendar__tile--active {
//     background: rgb(97, 191, 191);
//     color: white;
//   }
// }
export default CalendaOfNewEventFormComponent;