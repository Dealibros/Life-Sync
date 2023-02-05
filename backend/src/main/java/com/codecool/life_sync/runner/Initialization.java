package com.codecool.life_sync.runner;

import com.codecool.life_sync.entity.*;
import com.codecool.life_sync.repository.DailyCheckRepository;
import com.codecool.life_sync.repository.EventRepository;
import com.codecool.life_sync.repository.ToDosRepository;
import com.codecool.life_sync.entity.user.Role;
import com.codecool.life_sync.entity.user.User;
import com.codecool.life_sync.repository.UserRepository;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.Month;

@Configuration
public class Initialization {
    private final UserRepository userRepository;

    public Initialization(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Bean
    ApplicationRunner runner(EventRepository eventRepository, ToDosRepository toDosRepository, PasswordEncoder passwordEncoder, DailyCheckRepository dailyCheckRepository) {
        return args -> {

            User user = new User(1L,"doriana", "maria", "doriana@gmail.com", passwordEncoder.encode("123456"), Role.USER);
            userRepository.save(user);
            Event event1 = new Event("Supermarket", "Buy Groceries for Christmas", LocalDateTime.of(2022, Month.DECEMBER, 23, 11, 0, 0), LocalDateTime.of(2022, Month.DECEMBER, 23, 13, 0, 0), "Market", "Alarm", user);
            Event event2 = new Event("Prepare Christmas Dinner", "Find some nice recipes and cook", LocalDateTime.of(2022, Month.DECEMBER, 23, 14, 0, 0), LocalDateTime.of(2022, Month.DECEMBER, 23, 17, 0, 0), "Home", "Alarm",user);
            Event event3 = new Event("Check on Hayoung", "See how she is doing", LocalDateTime.of(2022, Month.DECEMBER, 22, 12, 0, 0), LocalDateTime.of(2022, Month.DECEMBER, 22, 12, 30, 0), "Home", "Alarm", user);

            eventRepository.save(event1);
            eventRepository.save(event2);
            eventRepository.save(event3);

            ToDos todo1 = new ToDos("Cook dinner", user);
            ToDos todo2 = new ToDos("Clean Home", user);
            ToDos todo3 = new ToDos("Buy rum", user);
            ToDos todo4 = new ToDos("Call friend", user);
            ToDos todo5 = new ToDos("Repair Ipad", user);

            toDosRepository.save(todo1);
            toDosRepository.save(todo2);
            toDosRepository.save(todo3);
            toDosRepository.save(todo4);
            toDosRepository.save(todo5);

/*            DailyCheck dailyCheck = new DailyCheck(LocalDate.now(), MoodGrade.GOOD, SleepGrade.BAD_SLEEP, "All good" );
            DailyCheck dailyCheck1 = new DailyCheck(LocalDate.of(2023, Month.FEBRUARY, 2), MoodGrade.GREAT, SleepGrade.WELL, "Relax");
            DailyCheck dailyCheck2 = new DailyCheck(LocalDate.of(2023, Month.FEBRUARY, 3), MoodGrade.NOT_BAD, SleepGrade.WELL, "Ate to late");
            DailyCheck dailyCheck3 = new DailyCheck(LocalDate.of(2023, Month.FEBRUARY, 4), MoodGrade.GREAT, SleepGrade.OK, "Stress at school");
            DailyCheck dailyCheck4 = new DailyCheck(LocalDate.of(2023, Month.FEBRUARY, 5), MoodGrade.GREAT, SleepGrade.WELL, "Ok");
            DailyCheck dailyCheck5 = new DailyCheck(LocalDate.of(2023, Month.FEBRUARY, 6), MoodGrade.ROUGH_DAY, SleepGrade.SO_SO, "Didn't sleep enough");
            DailyCheck dailyCheck6 = new DailyCheck(LocalDate.of(2023, Month.FEBRUARY, 7), MoodGrade.NOT_BAD, SleepGrade.REALLY_WELL, "Holidays");
            dailyCheckRepository.save(dailyCheck);
            dailyCheckRepository.save(dailyCheck1);
            dailyCheckRepository.save(dailyCheck2);
            dailyCheckRepository.save(dailyCheck3);
            dailyCheckRepository.save(dailyCheck4);
            dailyCheckRepository.save(dailyCheck5);
            dailyCheckRepository.save(dailyCheck6);*/


        };
    }

}
