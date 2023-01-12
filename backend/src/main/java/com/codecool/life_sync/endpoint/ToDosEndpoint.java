package com.codecool.life_sync.endpoint;

import com.codecool.life_sync.entity.ToDos;
import com.codecool.life_sync.service.ToDosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin

@RestController
@RequestMapping("/api/toDos")
public class ToDosEndpoint {
    private final ToDosService toDosService;

    @Autowired
    public ToDosEndpoint(ToDosService toDosService) {
        this.toDosService = toDosService;
    }

    @GetMapping(value = "/all")
    public List<ToDos> getAllToDos(){
        return toDosService.getAllToDos();
    }

    @PostMapping(value = "/newToDo")
    public String saveToDos(@RequestBody ToDos newToDo){
        toDosService.saveToDo(newToDo);
        return "{\"success\":1}";
    }

    @PutMapping("/updateToDo/{id}")
    public ToDos updateTodos(@RequestBody ToDos toDos, @PathVariable(value = "id") Long toDoId) throws Exception {
        toDosService.updateToDos(toDos, toDoId);
        return toDos;
    }

    @DeleteMapping("/deleteToDos")
    public String deleteTodos(ToDos deleteToDos){
        toDosService.deleteAllToDos(deleteToDos);
        return "{\"success\":1}";
    }
}
