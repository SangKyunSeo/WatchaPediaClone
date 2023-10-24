package com.boot.tv.dto;

import lombok.Data;

import java.sql.Date;

@Data
public class TvDTO {
    private int tv_num;
    private String tv_name;
    private Date tv_open;
    private String tv_content;
    private int tv_grade;
    private int tv_ott;
    private String image_url;
    private String image_oname;
}
