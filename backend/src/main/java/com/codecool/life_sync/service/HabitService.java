package com.codecool.life_sync.service;

import com.codecool.life_sync.entity.Habit;
import com.codecool.life_sync.repository.HabitRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HabitService {
    private HabitRepository habitRepository;

    public HabitService(HabitRepository habitRepository) {
        this.habitRepository = habitRepository;
    }

    public List<Habit> getAllHabits(){
        return habitRepository.findAll();
    }

    public void saveHabit(Habit habit){
        habitRepository.save(habit);
    }

    public void deleteHabit(Long id){
        habitRepository.deleteById(id);
    }
}
