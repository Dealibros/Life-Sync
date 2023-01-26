package com.codecool.life_sync.service;

import com.codecool.life_sync.entity.Event;
import com.codecool.life_sync.entity.user.User;
import com.codecool.life_sync.repository.EventRepository;
import com.codecool.life_sync.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;

import static java.time.temporal.TemporalAdjusters.nextOrSame;
import static java.time.temporal.TemporalAdjusters.previousOrSame;

@Service
public class EventService {
    private final EventRepository eventRepository;

    private final UserService userService;


    public EventService(EventRepository eventRepository, UserService userService) {
        this.eventRepository = eventRepository;
        this.userService = userService;
    }


    public List<Event> getAllEvents() {
        User user = userService.getAuthenticatedUser();
        return eventRepository.findEventByUserOrderByStartingTimeDesc(user);
    }

    public List<Event> getDailyEvents() {
        LocalDateTime startToday = LocalDateTime.of(LocalDate.now(), LocalTime.MIN);
        LocalDateTime endToday = LocalDateTime.of(LocalDate.now(), LocalTime.MAX);
        User user = userService.getAuthenticatedUser();
        return eventRepository.findEventsByUserAndStartingTimeBetweenOrderByStartingTimeDesc(user, startToday, endToday);
    }

    public List<Event> getWeeklyEvents() {
        LocalDate now = LocalDate.now();
        LocalDateTime mondayDateMorning = LocalDateTime.of(now.with(previousOrSame(DayOfWeek.MONDAY)), LocalTime.MIN);
        LocalDateTime sundayDateNight = LocalDateTime.of(now.with(nextOrSame(DayOfWeek.SUNDAY)), LocalTime.MAX);
        User user = userService.getAuthenticatedUser();
        return eventRepository.findEventsByUserAndStartingTimeBetweenOrderByStartingTimeDesc(user, mondayDateMorning, sundayDateNight);
    }

    public void saveEvent(Event event) {
        User user = userService.getAuthenticatedUser();
        event.setUser(user);
        eventRepository.save(event);
    }


    public void deleteEvent(Long id) {
        eventRepository.deleteById(id);
    }
}
