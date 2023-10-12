package com.boot.main.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.RestController;

@Controller
@Slf4j
public class MainController {

    @GetMapping("/")
    public String getHome(){
        return "redirect:/main";
    }

    @GetMapping("/main")
    public String getMain(){
        log.info("main으로 들어옴");
        return "index";
    }



}
