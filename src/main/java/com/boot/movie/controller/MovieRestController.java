package com.boot.movie.controller;

import com.boot.genre.dao.MovieGenreDAO;
import com.boot.genre.dto.MovieGenreDTO;
import com.boot.genre.service.MovieGenreService;
import com.boot.movie.dao.MovieDAO;
import com.boot.movie.dto.MovieDTO;
import com.boot.movie.service.MovieService;
import com.boot.movie.vo.MovieVO;
import com.boot.person.dto.MovieCastDTO;
import com.boot.person.service.PersonService;
import com.boot.review.service.ReviewService;
import com.boot.review.vo.ReviewVO;
import com.boot.scrab.service.ScrabService;
import com.boot.scrab.vo.ScrabVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@Slf4j
public class MovieRestController {

    private final MovieService movieService;
    private final MovieGenreService movieGenreService;
    private final PersonService personService;
    private final ScrabService scrabService;
    private final ReviewService reviewService;

    // 영화 상세 정보 조회 API
    @GetMapping("/getMovieInfo")
    public MovieDTO getMovie(@RequestParam int movie_num){
        log.info("<< 영화 상세 정보 조회 진입 >>");
        MovieDTO movieDTO = movieService.selectMovieDetail(movie_num);
        log.info("영화 상세 정보 : MovieDTO = " + movieDTO);
        return movieDTO;
    }

    // 영화 상세 정보 - 장르 조회 API
    @GetMapping("/getMovieGenre")
    public String getMovieGenre(@RequestParam int movie_num){
        log.info("<< 영화 장르 조회 진입 >>");
        String genreName = "";
        List<MovieGenreDTO> movieGenreDTOList = movieGenreService.selectMovieGenre(movie_num);
        for(MovieGenreDTO dto : movieGenreDTOList){
            genreName += dto.getGenre_name();
            genreName += "/";
        }
        genreName = genreName.substring(0, genreName.length() - 1);
        return genreName;
    }

    // 영화 상세 정보 - 출연/감독 정보 조회 API
    @GetMapping("/getMovieCast")
    public List<MovieCastDTO> getMovieCast(@RequestParam int movie_num){
        log.info("<< 영화별 출연/감독 정보 조회 진입 >>");
        List<MovieCastDTO> movieCastDTOList = personService.selectMovieCast(movie_num);

        return movieCastDTOList;
    }

    // 영화 상세 정보 - 로그인 했을 경우 스크랩 정보 조회
    @GetMapping("/getScrabInfo")
    public ScrabVO getScrabInfo(@RequestParam int item_num, @RequestParam int member_num, @RequestParam int scrab_item_type){
        log.info("<< 스크랩 정보 조회 >>");
        log.info("파라미터 : item_num = " + item_num + ", member_num = " + member_num );
        ScrabVO scrabVO = null;
        Map<String, Object> map = new HashMap<>();
        map.put("item_num",item_num);
        map.put("member_num",member_num);
        map.put("scrab_item_type", scrab_item_type);
        scrabVO = scrabService.selectScrab(map);

        log.info("<< scrabVO >> : " + scrabVO);

        return scrabVO;
    }

    // 리뷰 목록 조회
    @GetMapping("/getReviewInfo")
    public ReviewVO getReviewInfo(@RequestParam int member_num, @RequestParam int review_item_type, @RequestParam int review_item_num){
        log.info("<< 리뷰 목록 조회 진입 >>");
        log.info("파라미터 : member_num = " + member_num + ", review_item_type = " + review_item_type + ", review_item_num = " + review_item_num);

        ReviewVO db_reviewVO = null;
        Map<String, Object> map = new HashMap<>();
        map.put("member_num", member_num);
        map.put("review_item_type", review_item_type);
        map.put("review_item_num", review_item_num);

        db_reviewVO = reviewService.getReviewInfo(map);

        log.info("스크랩 정보 반환 : " + db_reviewVO);
        return db_reviewVO;
    }
}
