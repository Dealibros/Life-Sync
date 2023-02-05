package com.codecool.life_sync.endpoint;

import com.codecool.life_sync.entity.DailyCheck;
import com.codecool.life_sync.service.DailyCheckService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/dailyCheck")
public class DailyCheckEndpoint {
    private final DailyCheckService dailyCheckService;
    @Autowired
    public DailyCheckEndpoint(DailyCheckService dailyCheckService){
        this.dailyCheckService = dailyCheckService;
    }

    @GetMapping(value = "/All")
    public List<DailyCheck> getAllDailyChecks(){
        return dailyCheckService.getAllDailyChecks();
    }

    @PostMapping(value = "/newDailyCheck")
    public List<DailyCheck> saveDailyCheck(@RequestBody DailyCheck newDailyCheck){
        dailyCheckService.saveDailyCheck(newDailyCheck);
        return dailyCheckService.getAllDailyChecks();
    }
}
