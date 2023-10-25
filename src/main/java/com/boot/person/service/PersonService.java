package com.boot.person.service;

import com.boot.person.dao.PersonDAO;
import com.boot.person.dto.*;
import com.boot.person.vo.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class PersonService {

    private final PersonDAO personDAO;

    // 영화별 출연/감독 정보 조회
    public List<MovieCastDTO> selectMovieCast(Integer movie_num){
        List<MovieCastVO> movieCastVOList = personDAO.selectMovieCast(movie_num);
        List<MovieCastDTO> movieCastDTOList = new ArrayList<>();
        log.info("MovieCastVOList : " + movieCastVOList);
        for(MovieCastVO vo : movieCastVOList){
            MovieCastDTO movieCastDTO = new MovieCastDTO();
            movieCastDTO = movieCastDTO.voToDto(vo);
            movieCastDTOList.add(movieCastDTO);
        }

        return movieCastDTOList;
    }

    // TV별 출연/감독 정보 조회
    public List<TvCastDTO> selectTvCast(Integer tv_num){
        List<TvCastVO> tvCastVOList = personDAO.selectTvCast(tv_num);
        List<TvCastDTO> tvCastDTOList = new ArrayList<>();
        log.info("TvCastVOList : " + tvCastDTOList);

        for(TvCastVO vo : tvCastVOList){
            TvCastDTO tvCastDTO = new TvCastDTO();
            tvCastDTO = tvCastDTO.voToDto(vo);
            tvCastDTOList.add(tvCastDTO);
        }

        return tvCastDTOList;
    }

    // 인물 상세 정보 조회
    public PersonDetailDTO getPersonDetail(Integer person_num){
        log.info("<< 인물 상세 정보 조회 서비스 진입 >>");

        PersonDetailVO personDetailVO = personDAO.getPersonDetail(person_num);

        log.info("VO 객체 : " + personDetailVO);

        PersonDetailDTO personDetailDTO = new PersonDetailDTO();
        personDetailDTO = personDetailDTO.voToDto(personDetailVO);

        log.info("DTO 객체 : " + personDetailDTO);

        return personDetailDTO;
    }

    // 출연 영화 목록 조회
    public List<PersonMovieDTO> getPersonMovieList(Integer person_num){
        log.info("<< 출연 영화 목록 조회 서비스 진입 >>");

        List<PersonMovieVO> personMovieVOList = null;
        personMovieVOList = personDAO.getPersonMovieList(person_num);
        List<PersonMovieDTO> personMovieDTOList = new ArrayList<>();

        if(!personMovieVOList.isEmpty()){
            for(PersonMovieVO vo : personMovieVOList){
                PersonMovieDTO personMovieDTO = new PersonMovieDTO();
                personMovieDTO = personMovieDTO.voToDto(vo);
                personMovieDTOList.add(personMovieDTO);
            }
        }

        return personMovieDTOList;
    }

    // 출연 TV 정보 조회
    public List<PersonTvDTO> getPersonTvList(Integer person_num){
        log.info("<< 출연 TV 정보 조회 서비스 진입 >>");

        List<PersonTvVO> personTvVOList = null;
        personTvVOList = personDAO.getPersonTvList(person_num);
        List<PersonTvDTO> personTvDTOList = new ArrayList<>();

        if(!personTvVOList.isEmpty()){
            for(PersonTvVO vo : personTvVOList){
                PersonTvDTO personTvDTO = new PersonTvDTO();
                personTvDTO = personTvDTO.voToDto(vo);
                personTvDTOList.add(personTvDTO);
            }
        }

        return personTvDTOList;
    }
}
