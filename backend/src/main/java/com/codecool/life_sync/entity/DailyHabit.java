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
