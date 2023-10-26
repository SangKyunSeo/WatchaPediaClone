package com.boot.security;

//import com.fasterxml.jackson.databind.ObjectMapper;
import io.jsonwebtoken.JwtException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
//import org.springframework.boot.configurationprocessor.json.JSONException;
//import org.springframework.boot.configurationprocessor.json.JSONObject;
//import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
//import java.util.HashMap;
//import java.util.Map;

@Component
public class JwtExceptionFilter extends OncePerRequestFilter {
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        try{
            filterChain.doFilter(request, response);
        }catch(JwtException ex){
            String message = ex.getMessage();

            if(message.equals("UNKNOWN_ERROR")){
                setResponse(response, "UNKNOWN_ERROR");
            }else if(message.equals("WRONG_TYPE_TOKEN")){
                setResponse(response, "WRONG_TYPE_TOKEN");
            }else if(message.equals("EXPIRED_TOKEN")){
                setResponse(response, "EXPIRED_TOKEN");
            }else if(message.equals("UNSUPPORTED_TOKEN")){
                setResponse(response, "UNSUPPORTED_TOKEN");
            }else{
                setResponse(response, "ACCESS_DENIED");
            }
        }
    }

    public void setResponse(HttpServletResponse res, String errorMessage) throws IOException {
//        log.info("<< 에러 발생 컨트롤 진입 >>");
//        res.setContentType(MediaType.APPLICATION_JSON_VALUE);
//        res.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
//
        res.setContentType("application/json;charset=UTF-8");
        res.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        res.getWriter().print(errorMessage);


//        Map<String, Object> body = new HashMap<>();
//        body.put("status",HttpServletResponse.SC_UNAUTHORIZED);
//        body.put("error","Unauthorized");
//        body.put("message", errorMessage);
//        res.getWriter().print(body);
    }
}
