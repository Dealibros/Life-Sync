import './styles.css';
import { format, set } from "date-fns";
import parseISO from 'date-fns/parseISO';

export default function EventsComponent({ singleEvent }) {

  //Keep this for For weekly use
  // console.log(parseISO(singleEvent.startingTime, "EEEE LLLL do MMM LLLL")) 

  return (
    <div className="event-component">
      <div className="time-div">
      <h5 className='time-event'>{format(parseISO(singleEvent.startingTime), "EEEE - H LLL ")}</h5>
      <h5 className='hour-event'>{format(parseISO(singleEvent.startingTime), "p")}</h5>
      </div>
      <h5 className='title-event'>{singleEvent.eventTitle}</h5>
      <h5 className='description-event'>{singleEvent.description}</h5>
    </div>
  );
};

