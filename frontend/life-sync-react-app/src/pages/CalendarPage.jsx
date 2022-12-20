
import React, {useState} from "react";
import { format, set } from "date-fns";
import EventsBoard from "../components/eventsBoard/EventsBoard"
import Calendar from 'react-calendar'; 
import 'react-calendar/dist/Calendar.css';
import '../styles/CalendarPage.css';
import '../styles/CalendarReact.css';
import { daysToWeeks } from "date-fns/esm";



export default function CalendarPage() {
    const today = new Date();
    const [date, setDate] = useState(new Date());

  let greeting = "";
  if (today.getHours() < 12) {
    greeting = "Good morning!";
  } else if (today.getHours() < 18) {
    greeting = "Good afternoon!";
  } else {
    greeting = "Good evening!";
  }


  // function previousMonth(){
  //   setDate(`${(date.getMonth()+1)%12 + 1}, ${date.getDay()} ${date.getFullYear()}`.toLocaleString('en-US', {weekday:'long', day:'numeric', month: 'long'}));
  // }

  // function nextMonth(){
  //   setDate(`${(date.getMonth()+1)%12 + 1}, ${date.getDay()} ${date.getFullYear()}`.toLocaleString('en-US', {weekday:'long', day:'numeric', month: 'long'}));
  // }


  // Returns the month after and before
  const nextMonth = `${(date.getMonth()+1)%12 + 1}, ${date.getDay()} ${date.getFullYear()}`.toLocaleString('en-US', {weekday:'long', day:'numeric', month: 'long'});
  const previousMonth = `${(date.getMonth()+11)%12 + 1}, ${date.getDay()} ${date.getFullYear()};`.toLocaleString('en-US', {weekday:'long', day:'numeric', month: 'long'})

  console.log("plus " + nextMonth)
  console.log("minus " + previousMonth)

  return (
    <body style={{ 
    backgroundImage: `url(/backgrounds/watercolor-${date.toLocaleString('en-US', {month:'long'})}.jpg` ,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat' }}>

    <div className="App">
     <div className="wrapper">
      <div className="top-banner">
         <div className="greeting">
         {/* <img src="/media/planner_logo.png" className="planner" alt="planner" width="6rem" height="65rem"></img> */}
         <div>
          <h2 className="welcome">{greeting}</h2>
            <h3 className="main-date">{format(today, "EEEE, LLLL do").toLowerCase()}.</h3></div>
          </div>
      </div>
     </div>
     <h2 className="section-title">Planner</h2>
     <div className="action-area">
      <div className="centerCalendar">

      <Calendar  
      value={date} 
      onChange={setDate} 
      activeStartDate={date}
      onActiveStartDateChange={({value, activeStartDate, action})=>{
        if(action ==='next'){
          setDate(new Date(activeStartDate))
        }
        if(action === 'prev'){
          setDate(new Date(activeStartDate))
        }
      }}

  
      // onActiveStartDateChange={onActiveStartDateChange}
      // 
      

























































































































































































      
      // prevLabel = {previousMonth}
      // nextLabel = {nextMonth}
      />


      <EventsBoard/>
      </div>
      </div>
      <div className='div-date'>
      <p className='selected-date'>
        <span className='bold'>Selected date</span> {' '}<br/>
        <strong>{date.toLocaleString('en-US', {weekday:'long', day:'numeric', month: 'long'})}</strong><br/>
        <strong>{date.toLocaleString('en-US', {year:'numeric'})}</strong>
      </p>
      </div>
     </div>
   </body>

    
  );
}


