package com.codecool.life_sync.service;

import com.codecool.life_sync.entity.DailyHabit;
import com.codecool.life_sync.entity.user.User;
import com.codecool.life_sync.repository.DailyHabitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DailyHabitService {
    private final DailyHabitRepository dailyHabitRepository;

    @Autowired
    public DailyHabitService(DailyHabitRepository dailyHabitRepository) {
        this.dailyHabitRepository = dailyHabitRepository;
    }

    public List<DailyHabit> getAllDailyHabits() {
        return dailyHabitRepository.findAll();
    }

    public List<DailyHabit> saveDailyHabit(DailyHabit dailyHabit) {
        dailyHabitRepository.save(dailyHabit);
        return dailyHabitRepository.findAll();
    }

    public void updateDailyHabit(DailyHabit dailyHabit, Long dailyHabitId) throws Exception {
        DailyHabit clickDailyHabit = dailyHabitRepository.findById(dailyHabitId).orElseThrow(() -> new Exception("DailyHabit not found for this id :: " + dailyHabitId));
        if (clickDailyHabit.getDone()) {
            clickDailyHabit.setDone(false);
        } else {
            clickDailyHabit.setDone(true);
        }
        dailyHabitRepository.save(clickDailyHabit);
    }


    public void deleteDailyHabit(Long id) {
        dailyHabitRepository.deleteById(id);
    }

}
