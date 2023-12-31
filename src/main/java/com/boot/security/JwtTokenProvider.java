package com.boot.security;


import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;
//import org.springframework.stereotype.Service;

import java.security.Key;
//import java.util.Arrays;
//import java.util.Collection;
import java.util.Date;
import java.util.stream.Collectors;

@Component
@Slf4j
public class JwtTokenProvider {
    private final Key key;
//    private static int ONE_DAY = 24*60*60*1000;
    private static int THREE_MINUTES = 60 * 30 * 1000;
    private static int ONE_HOUR = 60 * 60 * 1000 * 24 * 7;
    private final UserDetailsService customUserDetailsService;

    public JwtTokenProvider(@Value("${jwt.secret}") String secretKey, UserDetailsService customUserDetailsService){
        byte[] keyBytes = Decoders.BASE64.decode(secretKey);
        this.key = Keys.hmacShaKeyFor(keyBytes);
        this.customUserDetailsService=customUserDetailsService;
    }

    // token 생성
    public TokenInfo generateToken(Authentication authentication){
        // 권한 조회
        String authorities = authentication.getAuthorities().stream().map(GrantedAuthority::getAuthority).collect(Collectors.joining(","));
        log.info("generateToken : " + authorities);
        long now = (new Date()).getTime();
        // accessToken 만료 시간 정의
        Date accessTokenExpired = new Date(now + THREE_MINUTES);
        // refreshToken 만료 시간 정의
        Date refreshTokenExpired = new Date(now + ONE_HOUR);
        // accessToken 생성
        String accessToken = Jwts.builder()
                .setSubject(authentication.getName())
                .claim("auth",authorities)
                .setExpiration(accessTokenExpired)
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();
        // refreshToken 생성
        String refreshToken = Jwts.builder()
                .setSubject(authentication.getName())
                .setExpiration(refreshTokenExpired)
                .signWith(key,SignatureAlgorithm.HS256)
                .claim("auth",authorities)
                .compact();

        return TokenInfo.builder().grantType("Bearer").accessToken(accessToken).refreshToken(refreshToken).build();
    }

    // JWT 토큰 복호화 및 토큰에서 정보 꺼내는 메서드
    public Authentication getAuthentication(String accessToken){
        UserDetails userDetails = customUserDetailsService.loadUserByUsername(this.getUsername(accessToken));
        return new UsernamePasswordAuthenticationToken(userDetails, "",userDetails.getAuthorities());
    }

    // 토큰의 유효성 및 만료일자 확인
    public boolean validateToken(String jwtToken){
        log.info("<< 토큰 유효성 검사 진입 >>");
        try{
            Jws<Claims> claims = Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(jwtToken);
            log.info("<< 유효성 검사 -> >> : " + !claims.getBody().getExpiration().before(new Date()));
            //return !claims.getBody().getExpiration().before(new Date());
            return true;
        }catch (SecurityException e) {
            log.info("UNKNOWN_ERROR");
            throw new JwtException("UNKNOWN_ERROR");
        } catch (MalformedJwtException e) {
            log.info("WRONG_TYPE_TOKEN");
            throw new JwtException("WRONG_TYPE_TOKEN");
        } catch (ExpiredJwtException e) {
            log.info("EXPIRED_TOKEN");
            throw new JwtException("EXPIRED_TOKEN");
        } catch (UnsupportedJwtException e) {
            log.info("UNSUPPORTED_TOKEN");
            throw new JwtException("UNSUPPORTED_TOKEN");
        } catch (IllegalArgumentException e) {
            log.info("ACCESS_DENIED");
            throw new JwtException("ACCESS_DENIED");
        }
    }
    public String getUsername(String accessToken){
        try{
            return Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(accessToken).getBody().getSubject();
        }catch(ExpiredJwtException e){
            return e.getClaims().toString();
        }

    }

}
