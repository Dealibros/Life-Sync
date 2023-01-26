package com.codecool.life_sync.service;

import com.codecool.life_sync.entity.ToDos;
import com.codecool.life_sync.entity.user.User;
import com.codecool.life_sync.repository.ToDosRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ToDosService {
    private final ToDosRepository toDosRepository;
    private final UserService userService;

    public ToDosService(ToDosRepository toDosRepository, UserService userService) {
        this.toDosRepository = toDosRepository;
        this.userService = userService;
    }

    public List<ToDos> getAllToDos() {
        User user = userService.getAuthenticatedUser();
        return toDosRepository.findAllByUser(user);
    }

    public void saveToDo(ToDos newToDo) {
        User user = userService.getAuthenticatedUser();
        newToDo.setComplete(false);
        newToDo.setUser(user);
        toDosRepository.save(newToDo);
    }

    public void updateToDos(ToDos updateToDo, Long toDoId) throws Exception {
        ToDos clickToDos = toDosRepository.findById(toDoId).orElseThrow(() -> new Exception("ToDo not found for this id :: " + toDoId));
        if (clickToDos.getComplete()) {
            clickToDos.setComplete(false);
        } else {
            clickToDos.setComplete(true);
        }
        toDosRepository.save(clickToDos);
    }

    public void deleteAllToDos() {
        User user = userService.getAuthenticatedUser();
        List<ToDos> completedToDos = toDosRepository.findAllByUserAndCompleteIsTrue(user);
        toDosRepository.deleteAll(completedToDos);
    }


}
