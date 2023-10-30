package com.boot.review.vo;

import lombok.Data;

import java.sql.Date;

@Data
public class ReviewPreviewVO {
    private int reviewNum;
    private int memberNum;
    private int reviewItemType;
    private int reviewItemNum;
    private String reviewContent;
    private int reviewScore;
    private Date reviewRegdate;
    private String movieName;
    private Date movieOpen;
    private String memberName;
    private String imageOname;
    private int scrabType;
}
