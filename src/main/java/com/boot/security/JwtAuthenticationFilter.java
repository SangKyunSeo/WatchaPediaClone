package com.boot.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
//import jakarta.servlet.ServletRequest;
//import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
//import org.springframework.web.filter.GenericFilterBean;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@RequiredArgsConstructor
@Component
@Slf4j
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtTokenProvider jwtTokenProvider;
//    @Override
//    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
//
//        log.info("filter 작용");
//        // Request Header 에서 JWT 토큰 추출
//        String token = resloveToken((HttpServletRequest) servletRequest);
//        log.info("filter - token : " + token);
//        // validateToken으로 토큰 유효성 검사
//        if(token != null && jwtTokenProvider.validateToken(token)){
//            // Authentication 객체를 가지고 와서 SecurityContext에 저장
//            log.info("토큰이 유효합니다 : token = " + token);
//            Authentication authentication = jwtTokenProvider.getAuthentication(token);
//            SecurityContextHolder.getContext().setAuthentication(authentication);
//        }else {
//            log.info("유효한 토큰이 없습니다.");
//        }
//        filterChain.doFilter(servletRequest, servletResponse);
//    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        log.info("filter 작용");
        // Request Header 에서 JWT 토큰 추출
        String token = resloveToken((HttpServletRequest) request);
        log.info("filter - token : " + token);
        log.info("<< filter를 요청한 url >> : " + request.getRequestURI());
        // validateToken으로 토큰 유효성 검사
        if(token != null && jwtTokenProvider.validateToken(token) && !request.getRequestURI().equals("/refreshToken")){
            // Authentication 객체를 가지고 와서 SecurityContext에 저장
            log.info("토큰이 유효합니다 : token = " + token);
            Authentication authentication = jwtTokenProvider.getAuthentication(token);
            SecurityContextHolder.getContext().setAuthentication(authentication);
        }else if(token != null && request.getRequestURI().equals("/refreshToken")){
            log.info("refreshToken으로 AccessToken재발급");
            // token에서 username 확인
            Authentication authentication = jwtTokenProvider.getAuthentication(token);
            TokenInfo tokenInfo = jwtTokenProvider.generateToken(authentication);
//            CustomUserDetails user = (CustomUserDetails) authentication.getPrincipal();
//            log.info("Token에서 추출한 정보 : member_email = " + user.getMember_email() + ", member_password = " + user.getPassword());
            log.info("<< 재발급 한 토큰 정보 >> : " + tokenInfo);
            authentication = jwtTokenProvider.getAuthentication(tokenInfo.getAccessToken());
            SecurityContextHolder.getContext().setAuthentication(authentication);
        }else{
            log.info("유효한 토큰이 없습니다.");
        }
        filterChain.doFilter(request, response);
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
