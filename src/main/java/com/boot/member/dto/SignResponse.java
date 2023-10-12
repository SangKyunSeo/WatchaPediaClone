package com.boot.member.dto;

import com.boot.security.TokenInfo;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Data
public class SignResponse {
    private int member_num;
    private String member_email;
    private String member_password;
    private String member_name;
    private TokenInfo token;
    private String role_name;
}
