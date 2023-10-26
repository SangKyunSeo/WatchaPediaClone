package com.boot.member.service;

import com.boot.member.dao.MemberDAO;
import com.boot.member.dto.MemberRole;
import com.boot.member.vo.MemberVO;
//import com.boot.security.CustomUserDetails;
import com.boot.security.JwtTokenProvider;
import com.boot.security.TokenInfo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
//import org.springframework.web.bind.annotation.RequestParam;

@Service
@RequiredArgsConstructor
@Slf4j
public class MemberService {
//    private CustomUserDetails customUserDetails;
    private JwtTokenProvider jwtTokenProvider;
    private AuthenticationManagerBuilder authenticationManagerBuilder;

    private final PasswordEncoder passwordEncoder;
    private final MemberDAO memberDAO;


    // 이메일 중복 검사 처리
    public MemberVO usedEmailCheck(String member_email){
        return memberDAO.usedEmailCheck(member_email);
    }
    // 회원가입 처리
    public void register(String member_email, String member_name, String member_pw){
        MemberVO member = new MemberVO();
        MemberRole memberRole = new MemberRole();

        member.setMember_email(member_email);
        member.setMember_name(member_name);
        member.setMember_pw(passwordEncoder.encode(member_pw));

        memberRole.setRole_name("ROLE_USER");
        memberDAO.insertMember(member);

        memberRole.setMember_id(member.getMember_num());
        memberDAO.insertMemberRole(memberRole);
    }

    // 회원정보 조회
    public MemberVO selectMemberInfoForLogin(String member_email){
        MemberVO memberVO = null;
        memberVO = memberDAO.selectMemberByEmail(member_email);
        return memberVO;
    }
    // 로그인 처리
    public TokenInfo login(String member_email, String member_pw){

        log.info("<< memberService의 login 진입 >> 파라미터: member_email = " + member_email + ", member_pw = " + member_pw);
        // Login ID/PW를 기반으로 Authentication 객체 생성
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(member_email, member_pw);

        // 실제 검증 단계
        // authenticate 메서드 실행될 때 CustomUserDetailsService의 loadUserByusername 메서드 실행
        Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);

        // 인증 정보를 기반으로 jwt 토큰 생성
        TokenInfo tokenInfo = jwtTokenProvider.generateToken(authentication);

        return tokenInfo;
    }
}
