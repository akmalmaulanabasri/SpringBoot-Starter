package com.akmal.betodo.Controller;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.akmal.betodo.Entity.Student;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class HomeController {

    public ArrayList<Student> students = new ArrayList<Student>();

    @GetMapping("/")
    public String home() {
        return "Welcome to BeTodo!";
    }

    @GetMapping("/student")
    public ArrayList<Student> homeGet() {
        return students;
    }

    @PostMapping("/student")
    public String homePost(@RequestBody Student body) {
        students.add(body);
        return "Success add student!";
    }
}
