package com.codecool.life_sync.service;

import com.codecool.life_sync.entity.Calendar;
import com.codecool.life_sync.repository.CalendarRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class InitializationService {
    @Autowired
    private CalendarRepository calendarRepository;

    @PostConstruct
    private void postConstruct() {
        Calendar calendar = new Calendar(0L, "Hello World, from SpringBoot");
        calendarRepository.save(calendar);
    }
}
