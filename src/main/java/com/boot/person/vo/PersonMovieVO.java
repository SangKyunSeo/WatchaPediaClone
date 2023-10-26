package com.boot.person.vo;

import lombok.Data;


@Data
public class PersonMovieVO {
    private int movie_num;
    private String movie_name;
    private int movie_open;
    private String person_item_role;
    private String image_oname;
    private double review_avg;
}
