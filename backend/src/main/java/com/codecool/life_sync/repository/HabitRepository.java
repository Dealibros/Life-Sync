package com.codecool.life_sync.repository;

import com.codecool.life_sync.entity.Habit;
import com.codecool.life_sync.entity.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HabitRepository extends JpaRepository<Habit, Long> {

    List<Habit> findHabitsByUser(User user);
}