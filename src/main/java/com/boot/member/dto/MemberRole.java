package com.boot.member.dto;

import lombok.Data;

@Data
public class MemberRole {
    private int id;
    private int member_id;
    private String role_name;
}
