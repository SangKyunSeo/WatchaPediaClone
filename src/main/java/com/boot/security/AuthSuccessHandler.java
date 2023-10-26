package com.boot.security;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
//import org.springframework.security.web.savedrequest.HttpSessionRequestCache;
//import org.springframework.security.web.savedrequest.RequestCache;
//import org.springframework.security.web.savedrequest.SavedRequest;
//import org.springframework.stereotype.Component;

import java.io.IOException;
//import java.io.PrintWriter;

@Configuration
@Slf4j
@RequiredArgsConstructor
public class AuthSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

    private final JwtTokenProvider jwtTokenProvider;
//    private final RequestCache requestCache = new HttpSessionRequestCache();
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException {
//        String targetUrl = "/main";
//        try{
//            response.setStatus(HttpServletResponse.SC_OK);
//            PrintWriter writer = response.getWriter();
//            writer.write(targetUrl);
//            writer.flush();
//            writer.close();
//        }catch(IOException e){
//            log.info("error: " + e.getMessage());
//        }
//        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(memberVO.getMember_email(), memberVO.getMember_pw());
//        Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);
        TokenInfo tokenInfo = jwtTokenProvider.generateToken(authentication);
        SecurityContextHolder.getContext().setAuthentication(authentication);
//        SavedRequest savedRequest = requestCache.getRequest(request,response);

        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add("Authorization","Bearer " + tokenInfo);

        response.setStatus(HttpStatus.OK.value());
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        response.setCharacterEncoding("UTF-8");


        log.info("token Check : " + tokenInfo);
        log.info("로그인은 성공");

        String uri = "/";
        getRedirectStrategy().sendRedirect(request,response,uri);
    }
}
