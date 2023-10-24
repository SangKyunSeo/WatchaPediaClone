package com.boot.genre.service;

import com.boot.genre.dao.MovieGenreDAO;
import com.boot.genre.dto.MovieGenreDTO;
import com.boot.genre.vo.MovieGenreVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class MovieGenreService {

    private final MovieGenreDAO movieGenreDAO;

    // 영화 목록 조회
    public List<MovieGenreDTO> selectMovieGenre(Integer movie_num){
        List<MovieGenreVO> movieGenreVOList = movieGenreDAO.selectMovieGenre(movie_num);
        List<MovieGenreDTO> movieGenreDTOList = new ArrayList<>();

        for(MovieGenreVO vo: movieGenreVOList){
            MovieGenreDTO movieGenreDTO = new MovieGenreDTO();
            movieGenreDTO = movieGenreDTO.voToDto(vo);
            movieGenreDTOList.add(movieGenreDTO);
        }

        return movieGenreDTOList;
    }
}
