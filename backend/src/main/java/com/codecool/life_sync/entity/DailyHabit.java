package com.codecool.life_sync.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
@Data
@Builder
@NoArgsConstructor

@Entity
public class DailyHabit {
    @Id
    private Long id;
    private LocalDate date;
    private Boolean done;


    public DailyHabit(Long id, LocalDate date, Boolean done) {
        this.id = id;
        this.date = date;
        this.done = done;
    }
}
