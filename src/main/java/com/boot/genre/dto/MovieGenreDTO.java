package com.boot.genre.dto;

import com.boot.genre.vo.MovieGenreVO;
import lombok.Data;

//import java.sql.Date;

@Data
public class MovieGenreDTO {

    private int movie_genre_num;
    private int movie_num;
    private int genre_num;
    private String genre_name;

    public MovieGenreDTO voToDto(MovieGenreVO movieGenreVO){
        MovieGenreDTO movieGenreDTO = new MovieGenreDTO();
        movieGenreDTO.setMovie_genre_num(movieGenreVO.getMovie_genre_num());
        movieGenreDTO.setMovie_num(movieGenreVO.getMovie_num());
        movieGenreDTO.setGenre_num(movieGenreVO.getGenre_num());
        movieGenreDTO.setGenre_name(movieGenreVO.getGenre_name());
        return movieGenreDTO;
    }

}
