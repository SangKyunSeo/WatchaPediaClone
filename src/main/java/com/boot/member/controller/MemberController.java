package com.boot.member.controller;

//import com.boot.member.dto.SignRequest;
//import com.boot.member.dto.SignResponse;
//import com.boot.member.service.MemberService;
//import com.boot.member.service.SignService;
//import com.boot.member.vo.MemberVO;
//import com.boot.security.PasswordEncoder;
//import com.boot.security.TokenInfo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;

@Controller
@RequiredArgsConstructor
@Slf4j
public class MemberController {

    // 로그인 폼 로직
    @GetMapping("/loginForm")
    public String loginForm(){
        log.info("로그인 폼 진입");
        return "index";
    }

    // 회원 가입 폼 로직
    @GetMapping("/registerForm")
    public String registerForm(){
        log.info("회원 가입 폼 진입");
        return "index";
    }



}
