package com.codecool.life_sync.service;

import com.codecool.life_sync.entity.ToDos;
import com.codecool.life_sync.repository.ToDosRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ToDosService {
    private ToDosRepository toDosRepository;

    public ToDosService(ToDosRepository toDosRepository) {
        this.toDosRepository = toDosRepository;
    }

    public List<ToDos> getAllToDos() {
        return toDosRepository.findAll();
    }

    public void saveToDo(ToDos newToDo){
        toDosRepository.save(newToDo);
    }

    public void updateToDos(ToDos updateToDo, Long toDoId) throws Exception{
    ToDos clickToDos = toDosRepository.findById(toDoId)
    .orElseThrow(() -> new Exception("ToDo not found for this id :: " + toDoId));
    if(clickToDos.getComplete()) {
        clickToDos.setComplete(false);
    }else{
        clickToDos.setComplete(true);
    }
    toDosRepository.save(clickToDos);
}

    public void deleteAllToDos(ToDos toDos){
        List <ToDos> completedToDos = toDosRepository.findAllByCompleteIsTrue();
        toDosRepository.deleteAll(completedToDos);
    }


}
