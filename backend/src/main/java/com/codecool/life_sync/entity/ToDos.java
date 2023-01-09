package com.codecool.life_sync.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor

@Entity
public class ToDos {
    @Id
    @GeneratedValue
    private Long toDoId;
    private String toDo;
    private Boolean complete;


    public ToDos(String toDo) {
        this.toDo = toDo;
        this.complete = false;
    }
}
