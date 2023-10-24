package com.boot.tv.vo;

import lombok.Data;

import java.sql.Date;

@Data
public class TvDetailVO {
    private int tv_num;
    private String tv_name;
    private Date tv_open;
    private String tv_content;
    private int tv_grade;
    private int tv_ott;
    private String image_oname;
}
