package com.codecool.life_sync.entity;

import com.codecool.life_sync.entity.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor

@Entity
public class DailyCheck {
    @GeneratedValue
    @Id
    private Long id;
    private LocalDate date;
    @Enumerated(EnumType.STRING)
    private MoodGrade moodGrade;
    private int moodGradeValue;

    @Enumerated(EnumType.STRING)
    private SleepGrade sleepGrade;

    private int sleepGradeValue;
    private String message;

    @ManyToOne
    @JoinColumn(name = "_user")
    private User user;


    public DailyCheck(LocalDate date, MoodGrade moodGrade, SleepGrade sleepGrade, String message, User user) {
        this.date = date;
        this.moodGrade = moodGrade;
        this.sleepGrade = sleepGrade;
        this.message = message;
        this.moodGradeValue = moodGrade.getValue();
        this.sleepGradeValue = sleepGrade.getValue();
        this.user = user;
    }

}
