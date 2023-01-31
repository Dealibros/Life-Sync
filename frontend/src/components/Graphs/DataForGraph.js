// import React, { useState } from 'react';
import { days } from '../../utils/days';

export default function DataForGraph() {
  // const [habits, setHabits] = useState();

  console.log(days);
  days.map((element) => {
    console.log(element);
    const daysMonth = element.date.substring(
      element.date.length - 2,
      element.date.length,
    );
  });
  //   daysMonth.map((i) => {
  //     for (element in data) {
  //       console.log(element);
  //     }
  //     data.x = i;
  //   });
  // );
  // { data /* see data tab */ }
  // }
  return (
    <>
      <div className="App">
        <div className="action-area">
          <div className="center-calendar">
            <h2 className="section-title">Profile</h2>
          </div>
        </div>
      </div>
    </>
  );
}
