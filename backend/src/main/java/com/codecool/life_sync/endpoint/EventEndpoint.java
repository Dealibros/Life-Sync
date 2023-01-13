package com.codecool.life_sync.endpoint;

import com.codecool.life_sync.entity.Event;
import com.codecool.life_sync.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/events")
public class EventEndpoint {
    private final EventService eventService;

    @Autowired
    public EventEndpoint(EventService eventService) {
        this.eventService = eventService;
    }

    @GetMapping(value = "/All")
    public List<Event> getAllEvents(){
        return eventService.getAllEvents();
    }

    @GetMapping(value = "/Today")
     public List<Event> getDailyEvents(){
        return eventService.getDailyEvents();
    }

    @GetMapping(value = "/Week")
    public List<Event> getWeeklyEvents(){
        return eventService.getWeeklyEvents();
    }

    @CrossOrigin
    @PostMapping(value = "/newEvent", produces = MediaType.APPLICATION_JSON_VALUE)
    public String saveEvent( @RequestBody Event newEvent){
        eventService.saveEvent(newEvent);
        return "{\"success\":1}";
    }

    @DeleteMapping(value = "/{id}")
    public String deleteEvent (@PathVariable Long id){
        eventService.deleteEvent(id);
        return "{\"success\":1}";
    }
}
