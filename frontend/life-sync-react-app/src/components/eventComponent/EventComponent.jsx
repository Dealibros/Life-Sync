import './styles.css';

export default function EventsComponent({singleEvent}) {

      return (
        <div className="event-component">
            <h4 className='title-event'>{singleEvent.eventTitle}</h4>
            <h4 className='description-event'>{singleEvent.description}</h4>
        </div>
      );
    };

