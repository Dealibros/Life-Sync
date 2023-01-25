package com.codecool.life_sync.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor

@Entity
public class Habit {
    @Id
    @GeneratedValue
    private Long habitId;
    private String title;
    private String description;
    private Boolean starred;

    @OneToMany (cascade = {CascadeType.ALL})

    private List<DailyHabit> habits;

    public Habit(String title, String description, Boolean starred, List<DailyHabit> habits) {
        this.title = title;
        this.description = description;
        this.starred = starred;
        this.habits = habits;
    }




/*   Understand how to implement this monthly
      habits(orderBy: date_ASC,
      where: { date_gte: $start, date_lte: $end }) {
        id
        date
        done*/



}




