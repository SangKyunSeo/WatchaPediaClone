package com.boot.member.service;

import com.boot.member.dao.MemberDAO;
import com.boot.member.dto.MemberRole;
import com.boot.member.dto.SignRequest;
import com.boot.member.dto.SignResponse;
import com.boot.member.vo.MemberVO;
import com.boot.security.JwtTokenProvider;
import com.boot.security.TokenInfo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class SignService {
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider jwtTokenProvider;
    private final MemberDAO memberDAO;
    private final AuthenticationManagerBuilder authenticationManagerBuilder;
    public SignResponse login(SignRequest request) throws Exception{
        log.info("<<SignService 진입 >> ");
        MemberVO memberVO = null;
        memberVO = memberDAO.selectMemberByEmail(request.getMember_email());

        if(memberVO == null){
            throw new BadCredentialsException("잘못된 계정 정보!");
        }

        if(!passwordEncoder.matches(request.getMember_password(),memberVO.getMember_pw())){
            throw new BadCredentialsException("잘못된 계정 정보!");
        }
        MemberRole memberRole = memberDAO.selectMemberRoleByNum(memberVO.getMember_num());
        SignResponse signResponse = new SignResponse();
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(memberVO.getMember_email(), memberVO.getMember_pw());
        Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);
        TokenInfo tokenInfo = jwtTokenProvider.generateToken(authentication);

        signResponse.setMember_num(memberVO.getMember_num());
        signResponse.setMember_email(memberVO.getMember_email());
        signResponse.setMember_name(memberVO.getMember_name());
        signResponse.setMember_password(memberVO.getMember_pw());
        signResponse.setRole_name(memberRole.getRole_name());
        signResponse.setToken(tokenInfo);
        return signResponse;
    }
}
