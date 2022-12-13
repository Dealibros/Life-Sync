package com.codecool.life_sync.service;

import com.codecool.life_sync.repository.CalendarRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CalendarService {
    private CalendarRepository calendarRepository;

    @Autowired
    public CalendarService(CalendarRepository calendarRepository) {
        this.calendarRepository = calendarRepository;
    }

    public Optional getMessage(Long id) {
        return calendarRepository.findById(id);
    }

    public void saveMessage(String message) {
        calendarRepository.saveAll(message);
    }

}
