package com.boot.security;

import com.boot.member.dao.MemberDAO;
import com.boot.member.vo.MemberVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class CustomUserDetailsService implements UserDetailsService {
    private final MemberDAO memberDAO;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        CustomUserDetails user = new CustomUserDetails();
        MemberVO memberVO = null;
        memberVO = memberDAO.selectMemberByEmail(username);
        log.info("<< loadUserByUsername >> : username = " + username + ", user : " + user );
        log.info("<< memberVO >> : " + memberVO);
        if(memberVO == null){
            log.info("<<member VO NULL 확인 >>");
            throw new UsernameNotFoundException("유저 정보가 없습니다.");
        }else{
            user.setMember_age(memberVO.getMember_age());
            user.setMember_auth(memberVO.getMember_auth());
            user.setMember_email(memberVO.getMember_email());
            user.setMember_name(memberVO.getMember_name());
            user.setMember_gender(memberVO.getMember_gender());
            user.setMember_num(memberVO.getMember_num());
            user.setMember_pw(memberVO.getMember_pw());
            user.setMember_regdate(memberVO.getMember_regdate());
            return user;
        }
    }
}
