import React, { useState } from "react";
import Calendar from "react-calendar";
// import { useHistory } from "react-router-dom";
import { format } from "date-fns";

const MyCalendar = ({ updateCurrentMonth }) => {
    /**Calendar state and functions */
    const [value, setValue] = useState(new Date());
    console.log("Hello")
  
    function onChange(nextValue) {
      setValue(nextValue);
    }
  
    /** OnClick function to go to daily view*/
    // let history = useHistory();
  
    const handleClickDate = (value) => {
      let formattedDate = format(value, "y-MM-dd");
      // history.push(`/date/${formattedDate}`);
    };
  
    const tileContent = ({ date, view }) =>

      view === "month" && date.getDay() === 2 ? <p></p> : null;

      return (
        <div className="wrapper">
            <h1>"Hello"</h1>
          <Calendar
            tileContent={tileContent}
            onChange={onChange}
            defaultView="month"
            value={value}
            prev2Label={null}
            next2Label={null}
            onClickDay={(value, event) => handleClickDate(value, event)}
            onActiveStartDateChange={({ activeStartDate, value, view }) => {
              updateCurrentMonth(activeStartDate.getMonth());
            }}
          />
      </div>
      );
    };

export default MyCalendar