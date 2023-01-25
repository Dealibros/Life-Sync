import dayjs from 'dayjs';

const dayInstance = dayjs();

export const start = dayInstance.startOf('month');
export const end = dayInstance.endOf('month');
export const current = dayInstance;
export const daysInMonth = dayInstance.daysInMonth();
export const TIME_FORMAT = 'YYYY-MM-DD';

// console.log(start);
// console.log(end);
// Note
// Open an Issue/Bug day.js repository (dayjs().startOf('month')) is
// returning 2019-04-30T22:00:00.000Z but dayjs().startOf('month').format('YYYY-MM-DD') returns
// 2019-05-01

// Memoize
// Expose a method that will accept an argument (Month)
// and it will return the list of days as Array[]
// This is going to be useful when we'll have a month
// picker on Habit screen but also for the Mood screen
// because there you can also filter the current month.

export const days = [...Array(daysInMonth).keys()].map((u) => {
  const date = start.add(u, 'day').format('YYYY-MM-DD');
  const newDate = new Date(date);
  const stringYear = newDate.getFullYear().toString();
  const stringMonth = (newDate.getMonth() + 1).toString();
  const stringDate = newDate.getDate().toString();

  const dateToString = stringYear + stringMonth + stringDate;
  return {
    id: dateToString,
    date,
    done: false,
  };
});
