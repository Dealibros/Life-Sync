package com.codecool.life_sync.service;
import com.codecool.life_sync.entity.DailyCheck;
import com.codecool.life_sync.entity.user.User;
import com.codecool.life_sync.repository.DailyCheckRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class DailyCheckService {
    private final DailyCheckRepository dailyCheckRepository;
    private final UserService userService;

    @Autowired
    public DailyCheckService(DailyCheckRepository dailyCheckRepository, UserService userService){
        this.dailyCheckRepository = dailyCheckRepository;
        this.userService = userService;
    }

    public List<DailyCheck> getAllDailyChecks(){
        User user = userService.getAuthenticatedUser();
        return dailyCheckRepository.findAllByUser(user);
    }

    //pass user form endpoint
    public List<DailyCheck> saveDailyCheck(DailyCheck newDailyCheck){
        User user = userService.getAuthenticatedUser();
        newDailyCheck.setMoodGradeValue(newDailyCheck.getMoodGrade().getValue());
        newDailyCheck.setSleepGradeValue(newDailyCheck.getSleepGrade().getValue());
        newDailyCheck.setUser(user);
        dailyCheckRepository.save(newDailyCheck);
        return dailyCheckRepository.findAllByUser(user);
    }
}
