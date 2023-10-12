package com.boot.security;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
@AllArgsConstructor
public class TokenInfo {

    private String grantType; // JWT 인증 타입 - http헤더에 prefix로 붙음
    private String accessToken;
    private String refreshToken;
}
