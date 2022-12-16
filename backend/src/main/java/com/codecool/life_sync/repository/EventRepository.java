package com.codecool.life_sync.service;

import com.codecool.life_sync.entity.Event;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepository extends JpaRepository<Event, Long> {
}