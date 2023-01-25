package com.codecool.life_sync.repository;

import com.codecool.life_sync.entity.DailyHabit;
import com.codecool.life_sync.entity.Habit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DailyHabitRepository extends JpaRepository<DailyHabit, Long> {



}