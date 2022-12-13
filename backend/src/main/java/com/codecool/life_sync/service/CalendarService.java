package com.codecool.life_sync.service;

import com.codecool.life_sync.entity.Calendar;
import com.codecool.life_sync.repository.CalendarRepository;
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

    public Optional<Calendar> getMessage(Long id) {
        return calendarRepository.findById(id);
    }

    public void saveMessage(Calendar calendar) {
        calendarRepository.save(calendar);
    }

}
