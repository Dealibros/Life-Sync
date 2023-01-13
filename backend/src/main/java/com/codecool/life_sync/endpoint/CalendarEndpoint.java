package com.codecool.life_sync.endpoint;

import com.codecool.life_sync.entity.Calendar;
import com.codecool.life_sync.service.CalendarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.Optional;



@RestController
@RequestMapping("/calendar")
public class CalendarEndpoint {
    private final CalendarService calendarService;

    @Autowired
    public CalendarEndpoint(CalendarService calendarService) {
        this.calendarService = calendarService;
    }

    @GetMapping
    public Optional<Calendar> getMessage(Long id) {
        System.out.println("request has arrived again");
        return calendarService.getMessage(id);
    }

    @PostMapping
    public void saveMessage(@RequestBody Calendar calendar) {
        calendarService.saveMessage(calendar);
    }
}
