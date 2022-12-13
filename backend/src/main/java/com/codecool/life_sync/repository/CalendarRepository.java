package com.codecool.life_sync.repository;

import com.codecool.life_sync.entity.Calendar;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface CalendarRepository extends JpaRepository<Calendar, Long> {

}
