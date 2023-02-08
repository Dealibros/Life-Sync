import '../styles/GraphsPage.css';
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { apiFetch } from '../apiFetch';
import NavBarTop from '../components/NavBarTop/NavBarTop';
import { days } from '../utils/days';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
);

export default function GraphsPage() {
  const [allDailyChecks, setAllDailyChecks] = useState([]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
    scales: {
      y: {
        min: 1,
        max: 5,
        ticks: {
          fontSize: 50,
          stepSize: 1,
          callback: function (value) {
            switch (value) {
              case 1:
                return '🙁';
              case 2:
                return '😐';
              case 3:
                return '🙂';
              case 4:
                return '😄';
              case 5:
                return '🤗';
              default:
                return '';
            }
          },
        },
      },
    },

    title: {
      display: true,
      text: 'Mood Tracker',
    },
  };

  console.log(options);
  const data = {
    labels: [],
    datasets: [
      {
        label: 'Mood',
        data: [],
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        lineTension: 0.5,
      },
      {
        label: 'Sleep',
        data: [],
        fill: true,
        borderColor: '#742774',
        lineTension: 0.5,
      },
    ],
  };

  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    if (chartInstance) {
      const canvas = chartInstance.canvas;
      const ctx = canvas.getContext('2d');
      ctx.font = '50px Arial';
    }
  }, [chartInstance]);

  useEffect(() => {
    apiFetch('http://localhost:8080/api/dailyCheck/All', 'GET', null).then(
      (data) => {
        setAllDailyChecks(data);
      },
    );
  }, []);

  const createMonth = [];
  const date = [];

  // We have an array with the 28 days of the month (data.labels [])
  // We have to fit the mood object date in the day array.
  // Then add there the mood and sleep value.
  // We have an object with an array with the moods created.

  days.map((element) => {
    date.push(element.date);
    createMonth.push(element.date.substring(8, 10));
  });

  data.labels = createMonth;

  const emptyData = [];
  for (let i = 0; i < data.labels.length; i++) {
    emptyData.push(null);
  }

  data.datasets[0].data = emptyData;
  const secondEmptyData = JSON.parse(JSON.stringify(emptyData));
  data.datasets[1].data = secondEmptyData;

  allDailyChecks.map((dailyElement, i) => {
    data.datasets[0].data[Number(dailyElement.date.substring(8, 10)) - 1] =
      dailyElement.moodGradeValue;

    data.datasets[1].data[Number(dailyElement.date.substring(8, 10)) - 1] =
      dailyElement.sleepGradeValue;
  });

  return (
    <>
      <div className="App">
        <NavBarTop />

        <div className="action-area">
          <div className="center-graph">
            <h2 className="section-title-graph">My Mood and Sleep Graph</h2>
            <div className="graph-div">
              <Line
                options={options}
                data={data}
                onElementsClick={(chart, elements) => {
                  setChartInstance(chart);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
