package com.boot.main.controller;

import com.boot.movie.dto.MovieDTO;
import com.boot.movie.service.MovieService;
//import com.boot.movie.vo.MovieVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
// import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/api")
public class MainRestController {
    private final MovieService movieService;

    // 메인 화면 영화 목록 조회
    @GetMapping("/mainMovie")
    public List<MovieDTO> mainMovieList(){
        log.info("<< 메인 화면 영화 목록 출력 진입 >>");
        List<MovieDTO> movieDTOList = movieService.selectMovieList();
        log.info("movieDTOList : " + movieDTOList);
        return movieDTOList;
    }

}
