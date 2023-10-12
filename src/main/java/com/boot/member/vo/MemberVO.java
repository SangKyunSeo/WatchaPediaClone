package com.boot.member.vo;

import lombok.Data;

import java.sql.Date;

@Data
public class MemberVO {
    private int member_num;
    private String member_name;
    private String member_email;
    private String member_pw;
    private int member_age;
    private int member_gender;
    private Date member_regdate;
    private int member_auth;
}
