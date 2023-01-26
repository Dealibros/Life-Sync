package com.codecool.life_sync.repository;

import com.codecool.life_sync.entity.Event;
import com.codecool.life_sync.entity.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {

    List<Event> findEventsByUserAndStartingTimeBetweenOrderByStartingTimeDesc(User user, @Param("startDate") LocalDateTime starDate, @Param("endDate") LocalDateTime endDate);

    List<Event> findEventByUserOrderByStartingTimeDesc(User user);

}