package com.codecool.life_sync.repository;

import com.codecool.life_sync.entity.DailyCheck;
import com.codecool.life_sync.entity.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DailyCheckRepository extends JpaRepository<DailyCheck, Long> {
    List<DailyCheck> findAllByUser(User user);


}
