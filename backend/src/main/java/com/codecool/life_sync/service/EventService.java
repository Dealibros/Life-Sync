package com.codecool.life_sync.service;

import com.codecool.life_sync.entity.Event;
import com.codecool.life_sync.repository.EventRepository;
import org.springframework.stereotype.Service;
import static java.time.temporal.TemporalAdjusters.previousOrSame;
import static java.time.temporal.TemporalAdjusters.nextOrSame;

import java.time.*;
import java.time.temporal.WeekFields;
import java.util.List;
import java.util.Locale;

@Service
public class EventService {
    private EventRepository eventRepository;

    public EventService(EventRepository eventRepository){
        this.eventRepository = eventRepository;
    }

    public List<Event> getAllEvents(){
        return eventRepository.findEventByOrderByStartingTimeDesc();
    }

    public List<Event> getDailyEvents(){
        LocalDateTime startToday = LocalDateTime.of(LocalDate.now(), LocalTime.MIN);
        LocalDateTime endToday = LocalDateTime.of(LocalDate.now(), LocalTime.MAX);
        return eventRepository.findByStartingTimeBetweenOrderByStartingTimeDesc(startToday, endToday);
    }

    public List<Event> getWeeklyEvents(){
        LocalDate now = LocalDate.now();
        LocalDateTime mondayDateMorning = LocalDateTime.of(now.with(previousOrSame(DayOfWeek.MONDAY)), LocalTime.MIN);
        LocalDateTime sundayDateNight = LocalDateTime.of(now.with(nextOrSame(DayOfWeek.SUNDAY)), LocalTime.MAX);
        return eventRepository.findByStartingTimeBetweenOrderByStartingTimeDesc(mondayDateMorning, sundayDateNight);
    }

    public void saveEvent(Event event) {
        System.out.println("EVENT "+ event);
        eventRepository.save(event);
    }


    public void deleteEvent(Long id){
        eventRepository.deleteById(id);
    }
}
