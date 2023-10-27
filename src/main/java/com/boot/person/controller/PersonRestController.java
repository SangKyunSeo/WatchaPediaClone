package com.boot.person.controller;

import com.boot.fav.dto.FavTotalDTO;
import com.boot.fav.service.FavService;
import com.boot.person.dto.PersonDetailDTO;
import com.boot.person.dto.PersonMovieDTO;
import com.boot.person.dto.PersonTvDTO;
import com.boot.person.service.PersonService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/api")
public class PersonRestController {

    private final PersonService personService;
    private final FavService favPersonService;

    // 인물 상세 정보 조회 API
    @GetMapping("/getPersonDetail")
    public PersonDetailDTO getPersonDetail(@RequestParam int person_num){

        log.info("<< 인물 상세 정보 조회 컨트롤러 진입 >>");
        log.info("파라미터 : person_num = " + person_num);

        PersonDetailDTO personDetailDTO = personService.getPersonDetail(person_num);

        log.info("[[ API 결과 ]] : personDetailDTO = " + personDetailDTO);

        return personDetailDTO;
    }

    // 출연 영화 목록 조회 API
    @GetMapping("/getPersonMovieList")
    public List<PersonMovieDTO> getPersonMovieList(@RequestParam int person_num){

        log.info("<< 출연 영화 목록 조회 API 진입 >>");

        List<PersonMovieDTO> personMovieDTOList = null;
        personMovieDTOList = personService.getPersonMovieList(person_num);

        log.info("[[ API 결과 ]] : personMovieDTOList = " + personMovieDTOList);

        return personMovieDTOList;
    }

    // 출연 TV 목록 조회 API
    @GetMapping("/getPersonTvList")
    public List<PersonTvDTO> getPersonTvList(@RequestParam int person_num){

        log.info("<< 출연 TV 목록 조회 API 진입 >>");

        List<PersonTvDTO> personTvDTOList = null;
        personTvDTOList = personService.getPersonTvList(person_num);

        log.info("[[ API 결과 ]] : personTvDTOList = " + personTvDTOList);

        return personTvDTOList;
    }

    // 좋아요 개수 조회 API
    @GetMapping("/getFavTotal")
    public int getPersonFav(@RequestParam int fav_item_num, @RequestParam int fav_item_type){
        log.info("<< 좋아요 토탈 API 진입 >>");
        log.info("파라미터 : fav_item_num = " + fav_item_num + ", fav_item_type = " + fav_item_type);

        Map<String, Object> map = new HashMap<>();
        map.put("fav_item_num", fav_item_num);
        map.put("fav_item_type", fav_item_type);

        FavTotalDTO favTotalDTO = null;
        favTotalDTO = favPersonService.getFavTotal(map);

        if(favTotalDTO != null){
            return favTotalDTO.getFav_Total();
        }
        return 0;
    }
}
