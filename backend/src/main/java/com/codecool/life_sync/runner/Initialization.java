package com.codecool.life_sync.runner;

import com.codecool.life_sync.entity.*;
import com.codecool.life_sync.entity.user.Role;
import com.codecool.life_sync.entity.user.User;
import com.codecool.life_sync.repository.*;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.Month;
import java.util.List;

@Configuration
public class Initialization {
    private final UserRepository userRepository;

    public Initialization(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Bean
    ApplicationRunner runner(EventRepository eventRepository, ToDosRepository toDosRepository, PasswordEncoder passwordEncoder, DailyCheckRepository dailyCheckRepository, HabitRepository habitRepository) {
        return args -> {

            User user = new User(1L, "Doriana", "Maria", "doriana@gmail.com", passwordEncoder.encode("123456"), Role.USER);
            userRepository.save(user);

            Event event1 = new Event("Dinner with Anna", "Plan Summer Dinner", LocalDateTime.of(2023, Month.FEBRUARY, 23, 18, 0, 0), LocalDateTime.of(2023, Month.FEBRUARY, 23, 20, 0, 0), "Restaurant", "Alarm", user);
            Event event2 = new Event("Doctor's Appointment", "Get Blood Test Results", LocalDateTime.of(2023, Month.FEBRUARY, 10, 14, 0, 0), LocalDateTime.of(2023, Month.FEBRUARY, 10, 15, 0, 0), "Clinic", "Alarm", user);
            Event event3 = new Event("Italy Trip", "Family Vacation", LocalDateTime.of(2023, Month.MARCH, 2, 12, 0, 0), LocalDateTime.of(2023, Month.MARCH, 10, 12, 30, 0), "Italy", "Alarm", user);
            Event event4 = new Event("Supermarket", "Buy Groceries for Christmas", LocalDateTime.of(2022, Month.DECEMBER, 23, 11, 0, 0), LocalDateTime.of(2022, Month.DECEMBER, 23, 13, 0, 0), "Market", "Alarm", user);
            Event event5 = new Event("Prepare Christmas Dinner", "Find some nice recipes and cook", LocalDateTime.of(2022, Month.DECEMBER, 23, 14, 0, 0), LocalDateTime.of(2022, Month.DECEMBER, 23, 17, 0, 0), "Home", "Alarm", user);
            Event event6 = new Event("Check on Hayoung", "See how she is doing", LocalDateTime.of(2022, Month.DECEMBER, 22, 12, 0, 0), LocalDateTime.of(2022, Month.DECEMBER, 22, 12, 30, 0), "Home", "Alarm", user);

            eventRepository.save(event1);
            eventRepository.save(event2);
            eventRepository.save(event3);
            eventRepository.save(event4);
            eventRepository.save(event5);
            eventRepository.save(event6);

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


            DailyCheck dailyCheck1 = new DailyCheck(LocalDate.of(2023, Month.FEBRUARY, 1), MoodGrade.GOOD, SleepGrade.WELL, "Well rested", user);
            DailyCheck dailyCheck2 = new DailyCheck(LocalDate.of(2023, Month.FEBRUARY, 2), MoodGrade.GREAT, SleepGrade.WELL, "Relax", user);
            DailyCheck dailyCheck3 = new DailyCheck(LocalDate.of(2023, Month.FEBRUARY, 3), MoodGrade.NOT_BAD, SleepGrade.WELL, "Ate to late", user);
            DailyCheck dailyCheck4 = new DailyCheck(LocalDate.of(2023, Month.FEBRUARY, 4), MoodGrade.GREAT, SleepGrade.OK, "Stress at school", user);
            DailyCheck dailyCheck5 = new DailyCheck(LocalDate.of(2023, Month.FEBRUARY, 5), MoodGrade.GREAT, SleepGrade.WELL, "Ok", user);
            DailyCheck dailyCheck6 = new DailyCheck(LocalDate.of(2023, Month.FEBRUARY, 6), MoodGrade.ROUGH_DAY, SleepGrade.SO_SO, "Didn't sleep enough", user);
            DailyCheck dailyCheck7 = new DailyCheck(LocalDate.of(2023, Month.FEBRUARY, 7), MoodGrade.NOT_BAD, SleepGrade.REALLY_WELL, "Holidays", user);
            DailyCheck dailyCheck8 = new DailyCheck(LocalDate.of(2023, Month.FEBRUARY, 8), MoodGrade.NOT_BAD, SleepGrade.REALLY_WELL, "Quite rested", user);
            DailyCheck dailyCheck9 = new DailyCheck(LocalDate.of(2023, Month.FEBRUARY, 9), MoodGrade.NOT_BAD, SleepGrade.REALLY_WELL, "Chill day", user);

            dailyCheckRepository.save(dailyCheck1);
            dailyCheckRepository.save(dailyCheck2);
            dailyCheckRepository.save(dailyCheck3);
            dailyCheckRepository.save(dailyCheck4);
            dailyCheckRepository.save(dailyCheck5);
            dailyCheckRepository.save(dailyCheck6);
            dailyCheckRepository.save(dailyCheck7);
            dailyCheckRepository.save(dailyCheck8);
            dailyCheckRepository.save(dailyCheck9);

//            Habit habit1 = new Habit("Go to the Gym", "Workout", true, List.of(), user);
//            Habit habit2 = new Habit("Drink 2L of Water", "Hydrate", false, List.of(), user);
//            Habit habit3 = new Habit("Morning Walk", "Calmness", false, List.of(), user);
//            Habit habit4 = new Habit("Read 20 Pages", "Relax", true, List.of(), user);
//
//            habitRepository.save(habit1);
//            habitRepository.save(habit2);
//            habitRepository.save(habit3);
//            habitRepository.save(habit4);

        };
    }

}
