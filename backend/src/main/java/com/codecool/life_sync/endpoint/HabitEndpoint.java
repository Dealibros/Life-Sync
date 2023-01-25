package com.codecool.life_sync.endpoint;

import com.codecool.life_sync.entity.Habit;
import com.codecool.life_sync.service.HabitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/habits")
public class HabitEndpoint {
    private final HabitService habitService;

    @Autowired
    public HabitEndpoint(HabitService habitService) {
        this.habitService = habitService;
    }

    @GetMapping(value = "/All")
    public List<Habit> getAllHabits(){
        return habitService.getAllHabits();
    }

    @PostMapping(value = "/newHabit", produces = MediaType.APPLICATION_JSON_VALUE)
    public String saveHabit(@RequestBody Habit newHabit){
        habitService.saveHabit(newHabit);
        return "{\"success\":1}";
    }

    @DeleteMapping(value = "/{id}")
    public String deleteHabit (@PathVariable Long id){
        habitService.deleteHabit(id);
        return "{\"success\":1}";
    }
}
