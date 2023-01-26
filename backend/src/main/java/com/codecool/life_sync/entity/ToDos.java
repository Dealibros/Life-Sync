package com.codecool.life_sync.entity;

import com.codecool.life_sync.entity.user.User;
import jakarta.persistence.*;
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
    @ManyToOne
    @JoinColumn(name = "_user")
    private User user;


    public ToDos(String toDo, User user) {
        this.toDo = toDo;
        this.complete = false;
        this.user = user;
    }
}
