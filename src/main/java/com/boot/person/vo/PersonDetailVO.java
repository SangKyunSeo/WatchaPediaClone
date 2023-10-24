package com.boot.person.vo;

import lombok.Data;

@Data
public class PersonDetailVO {
    private int person_num;
    private String person_name;
    private int person_job;
    private String person_content;

    private String image_oname;
}
