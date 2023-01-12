
 //Keep this for For weekly use
  // console.log(parseISO(singleEvent.startingTime, "EEEE LLLL do MMM LLLL"))


<<<<<<< HEAD

Changing Values:
Url
method: ('PUT, DELETE, GET, POST</D>')

if (!body){
body === null
}
function ApiCall(url, methodCall, consequence, body){
  fetch((url), {
    method: methodCall,
    headers: {
       'Content-Type': 'application/json',
    },
    body: body,
  })
  .then((response) => response.json())
      .then((response) => {
        consequence
  })
      .catch((error) => {
      console.log('error!', error);
    });
};








const DeleteEvent = (eventId) => {
  fetch(`http://localhost:8080/api/events/${eventId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((response) => {
      setEvents(events.filter((event) => event.eventId !== eventId));
    })
    .catch((error) => {
      console.log('error!', error);
    });
};
----------------------------------------------------------------------------

useEffect(() => {
  fetch(`http://localhost:8080/api/events/${timeFrame}`)
    .then((response) => response.json())
    .then((data) => {
      setEvents(data);
    });
}, [show, timeFrame]);

--------------------------------------------------------------------

const createEvent = (event) => {
  event.preventDefault();
  fetch('http://localhost:8080/api/events/newEvent', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newEvent),
  })
    .then((response) => response.json())
    .then((response) => {
      props.onClose();
    })
    .catch((error) => {
      console.log('error!', error);
    });
};

-------------------------------------------------------------

useEffect(() => {
  fetch(apiUrl, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'X-Api-Key': `${API_KEY}`,
    },
    contentType: 'application/json',
  })
    .then((response) => response.json())
    .then((data) => {
      setQuote(data);
    });
}, []);

------------------------------------------------------------------

  useEffect(() => {
    fetch(`http://localhost:8080/api/toDos/all`)
      .then((response) => response.json())
      .then((data) => {
        setToDoList(data);
      });
  }, [setRefresh, refresh]);

  const handleToggle = (id) => {
    console.log(id);
    fetch(`http://localhost:8080/api/toDos/updateToDo/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(id),
    })
      .then((response) => response.json())
      .then((response) => {
        setRefresh(toDoList);
      })
      .catch((error) => {
        console.log('error!', error);
      });
  };

  const deleteToDos = () => {
    fetch('http://localhost:8080/api/toDos/deleteToDos', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setRefresh(toDoList);
      })
      .catch((error) => {
        console.log('error!', error);
      });
  };
------------------------------------------------------------------

useEffect(() => {
  fetch(apiLocationUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((response) => {
      setLocation(response);
    })
    .catch((error) => {
      console.log('error!', error);
    });
}, []);

-----------------------------------------------------------

  const API_KEY = `${process.env.REACT_APP_WEATHER_API_KEY}`;
  const apiWeatherUrl = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${
    location.lat + ',' + location.lon
  }`;

  //Why is it still complaining after the condition statement?
  useEffect(() => {
    if (location.lat && location.lon) {
      fetch(apiWeatherUrl, {
        method: 'GET',
        mode: 'cors',
        contentType: 'application/json',
      })
        .then((response) => response.json())
        .then((data) => {
          setTemperature(data.current.temp_c);
          setWeatherIconData(data.current.condition.icon);
          const weatherIconLink = weatherIconData.slice(
            20,
            weatherIconData.length,
          );
          setWeatherIconLink(weatherIconLink);
        });
    }
  }, [weatherIconData, location]);
=======
/*Changing
Values:
    Url
method: ('PUT, DELETE, GET, POST</D>')

if (!body) {
    body === null
}

function ApiCall(url, methodCall, body, consequence) {
    fetch((url), {
        method: methodCall, headers: {
            'Content-Type': 'application/json',
        }, body: body,
    })
        .then((response) => response.json())
        .then((response) => {
            consequence
        })
        .catch((error) => {
            console.log('error!', error);
        });
};*/

/*
const DeleteEvent = (eventId) => {
    fetch(`http://localhost:8080/api/events/${eventId}`, {
        method: 'DELETE', headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then((response) => {
            setEvents(events.filter((event) => event.eventId !== eventId));
        })
        .catch((error) => {
            console.log('error!', error);
        });
};*/

/*
useEffect(() => {
    fetch(`http://localhost:8080/api/events/${timeFrame}`)
        .then((response) => response.json())
        .then((data) => {
            setEvents(data);
        });
}, [show, timeFrame]);
*/


/*
const createEvent = (event) => {
    event.preventDefault();
    fetch('http://localhost:8080/api/events/newEvent', {
        method: 'POST', headers: {
            'Content-Type': 'application/json',
        }, body: JSON.stringify(newEvent),
    })
        .then((response) => response.json())
        .then((response) => {
            props.onClose();
        })
        .catch((error) => {
            console.log('error!', error);
        });
};
*/

/*
    useEffect(() => {
        fetch(apiUrl, {
            method: 'GET', mode: 'cors', headers: {
                'X-Api-Key': `${API_KEY}`,
            }, contentType: 'application/json',
        })
            .then((response) => response.json())
            .then((data) => {
                setQuote(data);
            });
    }, []);*/

/*
    useEffect(() => {
        fetch(`http://localhost:8080/api/toDos/all`)
            .then((response) => response.json())
            .then((data) => {
                setToDoList(data);
            });
    }, [setRefresh, refresh]);*/

/*
const handleToggle = (id) => {
    console.log(id);
    fetch(`http://localhost:8080/api/toDos/updateToDo/${id}`, {
        method: 'PUT', headers: {
            'Content-Type': 'application/json',
        }, body: JSON.stringify(id),
    })
        .then((response) => response.json())
        .then((response) => {
            setRefresh(toDoList);
        })
        .catch((error) => {
            console.log('error!', error);
        });
};
*/

/*
const deleteToDos = () => {
    fetch('http://localhost:8080/api/toDos/deleteToDos', {
        method: 'DELETE', headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then((response) => {
            setRefresh(toDoList);
        })
        .catch((error) => {
            console.log('error!', error);
        });
};
*/


/*useEffect(() => {
    fetch(apiLocationUrl, {
        method: 'GET', headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then((response) => {
            setLocation(response);
        })
        .catch((error) => {
            console.log('error!', error);
        });
}, []);*/


/*const API_KEY = `${process.env.REACT_APP_WEATHER_API_KEY}`;
const apiWeatherUrl = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location.lat + ',' + location.lon}`;

//Why is it still complaining after the condition statement?
useEffect(() => {
    if (location.lat && location.lon) {
        fetch(apiWeatherUrl, {
            method: 'GET', mode: 'cors', contentType: 'application/json',
        })
            .then((response) => response.json())
            .then((data) => {
                setTemperature(data.current.temp_c);
                setWeatherIconData(data.current.condition.icon);
                const weatherIconLink = weatherIconData.slice(20, weatherIconData.length,);
                setWeatherIconLink(weatherIconLink);
            });
    }
}, [weatherIconData, location]);*/
>>>>>>> 93341d9cb168a408b8ce776ea1b1f9602f0c5685


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