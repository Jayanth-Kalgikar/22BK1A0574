package com.task1.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.task1.entity.Entity1;
import com.task1.repo.TaskRepo;

@RestController
@RequestMapping("/shorturl")
public class TaskController {

    @Autowired
    private TaskRepo repo;

    // Create a new Entity1
    @PostMapping
    public Map<String, String> create(@RequestBody Entity1 s) {
        repo.save(s);

        Map<String, String> response = new HashMap<>();
        response.put("shortlink", "http://localhost:8080/shorturl/" + s.getShortcode());
        response.put("expiresIn", formatValidity(s.getValidity()));
        
        return response;
    }

    private String formatValidity(long seconds) {
        long hours = seconds / 3600;
        return hours + " hours";
    }


    @GetMapping
    public List<Entity1> getAll() {
        return repo.findAll();
    }
}
