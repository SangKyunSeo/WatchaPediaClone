package com.boot.tv.controller;

//import com.boot.tv.dto.TvDTO;
//import com.boot.tv.service.TvService;
//import com.boot.tv.vo.TvVO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;

//import java.util.List;

@Controller
@RequiredArgsConstructor
public class TvController {

//    private final TvService tvService;

    // tv 리스트 출력 API
    @GetMapping("/tv")
    public String tvMain(){
        return "index";
    }

    @GetMapping("/tvDetail/{tv_num}")
    public String tvDetail(@PathVariable("tv_num") int tv_num){
        return "index";
    }
}
