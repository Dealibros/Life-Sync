package com.codecool.life_sync.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Optional;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor

@Entity
@Table(name = "event")
public class Event {
    @Id
    @GeneratedValue
    private Long eventId;
    private String eventTitle;

    //THis could be done as optional
    private String description;

    private LocalDateTime startingTime;
    private LocalDateTime endingTime;

    //This could be later changed using a proper location API
    private String Location;

    private String Notification;


    public Event(String eventTitle, String description, LocalDateTime startingTime, LocalDateTime endingTime, String location, String notification) {
        this.eventTitle = eventTitle;
        this.description = description;
        this.startingTime = startingTime;
        this.endingTime = endingTime;
        Location = location;
        Notification = notification;
    }
}


