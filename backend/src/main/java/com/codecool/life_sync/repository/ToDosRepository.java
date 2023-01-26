package com.codecool.life_sync.repository;

import com.codecool.life_sync.entity.ToDos;
import com.codecool.life_sync.entity.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ToDosRepository extends JpaRepository<ToDos, Long> {
    List<ToDos> findAllByUserAndCompleteIsTrue(User user);

    List<ToDos> findAllByUser(User user);
}
