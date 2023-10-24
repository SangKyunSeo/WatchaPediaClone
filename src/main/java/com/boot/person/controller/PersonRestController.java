package com.boot.person.controller;

import com.boot.person.dto.PersonDetailDTO;
import com.boot.person.dto.PersonMovieDTO;
import com.boot.person.dto.PersonTvDTO;
import com.boot.person.service.PersonService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
public class PersonRestController {

    private final PersonService personService;

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
}
