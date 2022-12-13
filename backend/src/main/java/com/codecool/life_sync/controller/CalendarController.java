package com.codecool.life_sync.controller;

import com.codecool.life_sync.service.CalendarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/calendar")
public class CalendarController {
    private final CalendarService calendarService;

    @Autowired
    public CalendarController(CalendarService calendarService) {
        this.calendarService = calendarService;
    }

    @GetMapping
    public Optional getMessage(Long id) {
        return calendarService.getMessage(id);
    }

    @PostMapping
    public void saveMessage(String message) {
        calendarService.saveMessage(message);
    }
}
