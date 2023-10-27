package com.boot.tv.controller;

//import com.boot.genre.dto.MovieGenreDTO;
import com.boot.genre.dto.TvGenreDTO;
import com.boot.genre.service.TvGenreService;
import com.boot.person.dto.TvCastDTO;
import com.boot.person.service.PersonService;
import com.boot.tv.dto.TvDTO;
import com.boot.tv.service.TvService;
import com.boot.tv.vo.TvDetailVO;
//import com.boot.tv.vo.TvVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/api")
public class TvRestController {

    private final TvService tvService;
    private final TvGenreService tvGenreService;
    private final PersonService personService;

    // tv 리스트 출력 API
    @GetMapping("/tvList")
    public List<TvDTO> getTvList(){
        log.info("<< tv 목록 조회 진입 >>");
        List<TvDTO> tvDTOList = tvService.selectTvList();

        return tvDTOList;
    }

    // tv 상세 정보 출력 API
    @GetMapping("/tvDetail")
    public TvDetailVO getTvDetail(@RequestParam int tv_num){
        log.info("<< tv 상세 정보 조회 진입 >>");
        TvDetailVO tvDetailVO = tvService.selectTvDetail(tv_num);
        return tvDetailVO;
    }

    // tv 장르 정보 출력 API
    @GetMapping("/getTvGenre")
    public String getTvGenre(@RequestParam int tv_num){
        log.info("<< Tv 장르 조회 진입 >>");
        String genreName = "";
        List<TvGenreDTO> tvGenreDTOList = tvGenreService.selectTvGenre(tv_num);
        for(TvGenreDTO dto : tvGenreDTOList){
            genreName += dto.getGenre_name();
            genreName += "/";
        }
        genreName = genreName.substring(0, genreName.length() - 1);
        return genreName;
    }

    // tv 출연 / 감독 정보 출력 API
    @GetMapping("/getTvCast")
    public List<TvCastDTO> getTvCastList(@RequestParam int tv_num){
        log.info("<< Tv 출연 / 감독 정보 출력 API 진입 >>");
        List<TvCastDTO> tvCastDTOList = new ArrayList<>();
        tvCastDTOList = personService.selectTvCast(tv_num);

        return tvCastDTOList;
    }

}
