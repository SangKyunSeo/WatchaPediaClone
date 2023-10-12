package com.boot.movie.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@RequiredArgsConstructor
@Slf4j
public class MovieController {

    @GetMapping("/movie")
    public String getMovie(){
        log.info("<< 영화 메인 화면 진입 >>");
        return "index";
    }
}
