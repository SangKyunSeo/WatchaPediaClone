package com.boot.movie.service;

import com.boot.movie.dao.MovieDAO;
import com.boot.movie.dto.MovieDTO;
//import com.boot.movie.vo.MovieVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class MovieService {
    private final MovieDAO movieDAO;

    // 영화 목록 조회
    public List<MovieDTO> selectMovieList(){
        log.info("<< 영화 목록 조회 서비스 진입 >>");
        return movieDAO.selectMovieList();
    }

    // 영화 상세 정보 조회
    public MovieDTO selectMovieDetail(Integer movie_num){
        return movieDAO.selectMovieDetail(movie_num);
    }
}
