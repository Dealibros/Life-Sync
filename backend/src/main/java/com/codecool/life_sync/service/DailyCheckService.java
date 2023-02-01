package com.codecool.life_sync.service;

import com.codecool.life_sync.entity.DailyCheck;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DailyChecker {
    private final DailyCheckRepository dailyCheckRepository;

    @Autowired
    public DailyCheckService(DailyCheckRepository dailyCheckRepository){
        this.dailyCheckRepository = dailyCheckRepository;
    }
}
