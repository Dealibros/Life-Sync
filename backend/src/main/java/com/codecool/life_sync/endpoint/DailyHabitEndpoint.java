package com.codecool.life_sync.endpoint;

import com.codecool.life_sync.entity.DailyHabit;
import com.codecool.life_sync.service.DailyHabitService;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/dailyHabits")
public class DailyHabitEndpoint {
    private final DailyHabitService dailyHabitService;

    public DailyHabitEndpoint(DailyHabitService dailyHabitService) {
        this.dailyHabitService = dailyHabitService;
    }

    @GetMapping(value = "/All")
    public List<DailyHabit> getAllDailyHabits(){
        return dailyHabitService.getAllDailyHabits();
    }

    @PostMapping(value = "/newDailyHabit")
    public List<DailyHabit> saveDailyHabit(@RequestBody DailyHabit newDailyHabit){
        dailyHabitService.saveDailyHabit(newDailyHabit);
        System.out.println(dailyHabitService.getAllDailyHabits());
        return dailyHabitService.getAllDailyHabits();
    }

    @PutMapping("/updateDailyHabit/{id}")
    public DailyHabit updateDailyHabit(@RequestBody DailyHabit dailyHabit, @PathVariable(value = "id") Long dailyHabitId) throws Exception {
        dailyHabitService.updateDailyHabit(dailyHabit, dailyHabitId);
        return dailyHabit;
    }

    @DeleteMapping(value = "/{id}")
    public String deleteDailyHabit (@PathVariable Long id){
        dailyHabitService.deleteDailyHabit(id);
        return "{\"success\":1}";
    }
}
