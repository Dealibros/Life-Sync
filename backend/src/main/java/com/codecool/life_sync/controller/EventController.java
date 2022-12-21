package com.codecool.life_sync.controller;

import com.codecool.life_sync.entity.Event;
import com.codecool.life_sync.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin

@RestController
@RequestMapping("/calendar/event")
public class EventController {
    private final EventService eventService;

    @Autowired
    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @GetMapping
    public List<Event> getAllEvents(){
        return eventService.getAllEvents();
    }

    @PostMapping
    public void saveEvent(@RequestBody Event event){
        eventService.saveEvent(event);
    }
}
