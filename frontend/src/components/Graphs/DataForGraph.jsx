import { useState } from 'react';
import { days } from '../../utils/days';

export const data = [
  {
    id: 'Mood',
    data: [],
  },
  {
    id: 'Sleep',
    data: [],
  },
];

export default function DataForGraph() {
  const createMonth = [];
  const date = [];

  days.map((element) => {
    date.push(element.date);
    createMonth.push(element.date.substring(8, 10));
  });

  //Will be good to pass this data to the ResponsiveBumpGraph
  const monthYear = date[0].substring(0, 7);

  const builtArray = [];
  createMonth.map((element, i) => {
    builtArray.push({ x: parseInt(createMonth[i]), y: null });
    data[0].data = builtArray;
    data[1].data = builtArray;
  });

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
