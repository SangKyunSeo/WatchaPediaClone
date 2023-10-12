package com.boot.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.GenericFilterBean;

import java.io.IOException;

@RequiredArgsConstructor
@Component
@Slf4j
public class JwtAuthenticationFilter extends GenericFilterBean {

    private final JwtTokenProvider jwtTokenProvider;

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {

        log.info("filter 작용");
        // Request Header 에서 JWT 토큰 추출
        String token = resloveToken((HttpServletRequest) servletRequest);
        log.info("filter - token : " + token);
        // validateToken으로 토큰 유효성 검사
        if(token != null && jwtTokenProvider.validateToken(token)){
            // Authentication 객체를 가지고 와서 SecurityContext에 저장
            Authentication authentication = jwtTokenProvider.getAuthentication(token);
            SecurityContextHolder.getContext().setAuthentication(authentication);
        }else{
            log.info("유효한 jwt 토큰이 없습니다.");
        }
        filterChain.doFilter(servletRequest, servletResponse);
    }

    // Request Header에서 토큰 정보 추출
    private String resloveToken(HttpServletRequest request){
        log.info("<<Request Header 토큰 정보 추출 진입 >>");
        log.info("Authorization : " + request.getHeader("Authorization"));
        String bearerToken = request.getHeader("Authorization");
        if(StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer")){
            return bearerToken.substring(7);
        }
        return null;
    }
}
