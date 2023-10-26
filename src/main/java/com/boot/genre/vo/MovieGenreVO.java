package com.boot.genre.vo;

//import com.boot.genre.dto.MovieGenreDTO;
import lombok.Data;

//import java.sql.Date;

@Data
public class MovieGenreVO {
    private int movie_genre_num;
    private int movie_num;
    private int genre_num;
    private String genre_name;
}
