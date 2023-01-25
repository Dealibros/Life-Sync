package com.codecool.life_sync.repository;

import com.codecool.life_sync.entity.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {

    List<Event> findByStartingTimeBetweenOrderByStartingTimeDesc(@Param("startDate") LocalDateTime starDate,  @Param("endDate") LocalDateTime endDate);

    List<Event> findEventByOrderByStartingTimeDesc();

    List<Event> findEventByUserId(Long userId);
}