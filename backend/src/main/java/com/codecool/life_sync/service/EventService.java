package com.codecool.life_sync.service;

import com.codecool.life_sync.entity.Event;
import com.codecool.life_sync.repository.EventRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class EventService {
    private EventRepository eventRepository;

    public EventService(EventRepository eventRepository){
        this.eventRepository = eventRepository;
    }

    public List<Event> getAllEvents(){
        return eventRepository.findAll();
    }

    public void saveEvent(Event event) {
        eventRepository.save(event);
    }
}
