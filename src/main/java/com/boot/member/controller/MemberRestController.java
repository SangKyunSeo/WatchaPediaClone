package com.boot.member.controller;

import com.boot.member.dto.SignRequest;
import com.boot.member.dto.SignResponse;
import com.boot.member.service.MemberService;
import com.boot.member.service.SignService;
import com.boot.member.vo.MemberVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@Slf4j
public class MemberRestController {

    private final MemberService memberService;
    private final SignService signService;
    // 로그인 처리 로직

    @PostMapping("/login")
    public SignResponse login(@RequestParam String username, @RequestParam String password) throws Exception {
        log.info("username: " + username);
        String member_email = username;
        String member_pw = password;
        MemberVO memberVO = memberService.selectMemberInfoForLogin(username);
        SignRequest signRequest = new SignRequest();
        signRequest.setMember_email(memberVO.getMember_email());
        signRequest.setMember_num(memberVO.getMember_num());
        signRequest.setMember_name(memberVO.getMember_name());
        signRequest.setMember_password(memberVO.getMember_pw());

        SignResponse signResponse = signService.login(signRequest);
        return signResponse;
    }

    // 로그인 에러 처리 로직
    @GetMapping("/loginError")
    public String loginError(){
        return "loginError";
    }

    // 회원가입 처리 로직
    @PostMapping("/register")
    public String register(@RequestParam String member_email, @RequestParam String member_name, @RequestParam String member_pw){
        memberService.register(member_email,member_name,member_pw);
        return "index";
    }
}
