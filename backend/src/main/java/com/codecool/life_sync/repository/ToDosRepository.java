package com.codecool.life_sync.repository;

import com.codecool.life_sync.entity.ToDos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ToDosRepository extends JpaRepository<ToDos, Long> {
    List<ToDos> findAllByCompleteIsTrue();
}
