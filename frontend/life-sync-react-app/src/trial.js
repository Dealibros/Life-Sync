// // Returns the month after and before
// const nextMonth = `${
//   ((date.getMonth() + 1) % 12) + 1
// }, ${date.getDay()} ${date.getFullYear()}`.toLocaleString('en-US', {
//   weekday: 'long',
//   day: 'numeric',
//   month: 'long',
// });
// const previousMonth = `${
//   ((date.getMonth() + 11) % 12) + 1
// }, ${date.getDay()} ${date.getFullYear()};`.toLocaleString('en-US', {
//   weekday: 'long',
//   day: 'numeric',
//   month: 'long',
// });

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
