package com.boot.person.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
@RequiredArgsConstructor
@Slf4j
public class PersonController {

    // 인물 상세 페이지 API
    @GetMapping("/personDetail/{person_num}")
    public String personDetail(@PathVariable("person_num") int person_num){
        log.info("<< 인물 상세 페이지 진입 >>");
        return "index";
    }
}
