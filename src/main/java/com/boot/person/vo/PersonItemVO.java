package com.boot.person.vo;

import lombok.Data;

@Data
public class PersonItemVO {
    private int person_item_num;
    private int person_num;
    private int item_type;
    private int item_num;
    private String person_item_role;
}
