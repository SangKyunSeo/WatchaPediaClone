package com.boot.movie.dto;

import lombok.Data;

import java.sql.Date;

@Data
public class MovieDTO {
    private int movie_num;
    private String movie_name;
    private Date movie_open;
    private String movie_content;
    private int movie_grade;
    private String image_url;
    private String image_oname;
}
