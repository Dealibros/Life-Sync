package com.codecool.life_sync.service;

import com.codecool.life_sync.entity.Habit;
import com.codecool.life_sync.entity.user.User;
import com.codecool.life_sync.repository.HabitRepository;
import com.codecool.life_sync.repository.UserRepository;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HabitService {
    private final HabitRepository habitRepository;
    private final UserService userService;

    public HabitService(HabitRepository habitRepository, UserService userService) {
        this.habitRepository = habitRepository;
        this.userService = userService;
    }

    public List<Habit> getAllHabits(){
        User user = userService.getAuthenticatedUser();
        return habitRepository.findHabitsByUser(user);
    }

    public void saveHabit(Habit habit){
        User user = userService.getAuthenticatedUser();
        habit.setUser(user);
        habitRepository.save(habit);
    }

    public void deleteHabit(Long id){
        habitRepository.deleteById(id);
    }
}
