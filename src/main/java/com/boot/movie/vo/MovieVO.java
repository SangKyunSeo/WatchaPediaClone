package com.boot.movie.vo;

import lombok.Data;

import java.sql.Date;

@Data
public class MovieVO {
    private int movie_num;
    private String movie_name;
    private Date movie_open;
    private String movie_content;
    private int movie_grade;
}
