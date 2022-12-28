export const INITIAL_EVENT = {
    kind: "calendar-event",
    title: "",
    description: "",
    location: "",
    creator: {
      name: "Dea Miku",
      userId: "1",
    },
    start: {
      date: null,
      time: { hours: null, minutes: null, ap: null, allday: false },
    },
    end: {
      date: null,
      time: { hours: null, minutes: null, ap: null, allday: false },
    },
    reminders: [
      /* {
            method: null,
            minutes: null,
          },*/
    ]
};

export const HOURS = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
];
export const MINUTES = [
  "00",
  "05",
  "10",
  "15",
  "20",
  "25",
  "30",
  "35",
  "40",
  "45",
  "50",
  "55",
];
