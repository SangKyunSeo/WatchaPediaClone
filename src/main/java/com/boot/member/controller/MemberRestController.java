package com.boot.member.controller;

import com.boot.member.dto.SignRequest;
import com.boot.member.dto.SignResponse;
import com.boot.member.service.MemberService;
import com.boot.member.service.SignService;
import com.boot.member.vo.MemberVO;
import com.boot.security.TokenInfo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
//import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@Slf4j
public class MemberRestController {

    private final MemberService memberService;
    private final SignService signService;
    // 로그인 처리 로직

    @PostMapping("/login")
    public SignResponse login(String username, String password) throws Exception {
        log.info("username: " + username);
        String member_email = username;
        String member_pw = password;

        log.info("Member_email = " + member_email + ", member_pw = " + member_pw);

        MemberVO memberVO = memberService.selectMemberInfoForLogin(username);
        SignRequest signRequest = new SignRequest();

        signRequest.setMember_email(memberVO.getMember_email());
        signRequest.setMember_num(memberVO.getMember_num());
        signRequest.setMember_name(memberVO.getMember_name());
        signRequest.setMember_password(password);

        SignResponse signResponse = signService.login(signRequest);
        return signResponse;
    }

    // 로그인 에러 처리 로직
    @ExceptionHandler(BadCredentialsException.class)
    public String loginError(){
        return "loginError";
    }

    // 회원가입 처리 로직
    @PostMapping("/register")
    public String register(@RequestParam String member_email, @RequestParam String member_name, @RequestParam String member_pw){
        log.info("회원가입 처리 API 조회 진입");

        log.info("파라미터 : member_email = " + member_email + ", member_name = " + member_name + ", member_pw = " + member_pw);

        log.info("이메일 중복 검사 진행");
        MemberVO db_memberVO = null;
        db_memberVO = memberService.usedEmailCheck(member_email);

        if(db_memberVO != null){
            return "used";
        }

        memberService.register(member_email,member_name,member_pw);
        return "success";
    }

    // 로그아웃 처리 API
    @GetMapping("/logout")
    public String logout(){
        return "";
    }

    // refreshToken을 통한 토큰 재발급 API
    @PostMapping("/refreshToken")
    public TokenInfo reGenerateToken(@RequestParam String member_email, @RequestParam String member_pw){
//        String refreshToken = authorization.substring(7);
        //TokenInfo tokenInfo = signService.reGenerateToken(member_email, member_pw, refreshToken);
        TokenInfo tokenInfo = signService.reGenerateToken(member_email, member_pw);
        log.info("<< 토큰 재발급 성공 ㅎ >> : " + tokenInfo);
        return tokenInfo;
    }
}
