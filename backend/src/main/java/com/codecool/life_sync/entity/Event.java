package com.codecool.life_sync.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;;
import java.time.LocalDateTime;

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
    private String title;
    private String description;
    private LocalDateTime startingTime;
    private LocalDateTime endingTime;
    private String location;
    private String notification;
    private Long userId;

    public Event(String eventTitle, String description, LocalDateTime startingTime, LocalDateTime endingTime, String location, String notification, Long userId) {
        this.title = eventTitle;
        this.description = description;
        this.startingTime = startingTime;
        this.endingTime = endingTime;
        this.location = location;
        this.notification = notification;
        this.userId = userId;
    }
}


