package com.codecool.life_sync.endpoint;

import com.codecool.life_sync.entity.Event;
import com.codecool.life_sync.entity.user.User;
import com.codecool.life_sync.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
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

    @GetMapping(value = "/all")
    public List<Event> getAllEvents(){
        return eventService.getAllEvents();
    }

    @GetMapping(value = "/today")
     public List<Event> getDailyEvents(){
        return eventService.getDailyEvents();
    }

    @GetMapping(value = "/week")
    public List<Event> getWeeklyEvents(){
        return eventService.getWeeklyEvents();
    }

    @PostMapping(value = "/newEvent", produces = MediaType.APPLICATION_JSON_VALUE)
    public String saveEvent(@RequestBody Event newEvent){
        eventService.saveEvent(newEvent);
        return "{\"success\":1}";
    }

    @DeleteMapping(value = "/{id}")
    public String deleteEvent (@PathVariable Long id){
        eventService.deleteEvent(id);
        return "{\"success\":1}";
    }
}
