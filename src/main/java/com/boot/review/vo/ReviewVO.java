package com.boot.review.vo;

import lombok.Data;

import java.sql.Date;

@Data
public class ReviewVO {
    private int review_num;
    private int member_num;
    private int review_item_type;
    private int review_item_num;
    private String review_content;
    private int review_score;
    private Date review_regdate;

    private String member_name;
    private String image_oname;
    private int scrab_type;
}
