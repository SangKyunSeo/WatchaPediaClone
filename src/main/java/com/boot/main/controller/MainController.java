package com.boot.main.controller;

//import com.boot.movie.service.MovieService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RestController;
// import org.springframework.web.bind.annotation.RestController;

@Controller
@RequiredArgsConstructor
@Slf4j
public class MainController {

    @GetMapping("/")
    public String getHome(){
        return "redirect:/main";
    }

    @GetMapping("/main")
    public String getMain(Model model){
        log.info("<< main 진입 >>");
        return "index";
    }

}
