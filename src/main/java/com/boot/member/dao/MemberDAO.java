package com.boot.member.dao;

import com.boot.member.dto.MemberRole;
import com.boot.member.vo.MemberVO;
//import com.boot.security.CustomUserDetails;
import lombok.extern.slf4j.Slf4j;
//import org.apache.ibatis.annotations.Mapper;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.jdbc.support.GeneratedKeyHolder;
//import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
@Slf4j
public class MemberDAO {

    @Autowired
    private SqlSessionTemplate sqlSession;


    // 이메일 중복 검사 처리
    public MemberVO usedEmailCheck(String member_email){
        log.info("<< 이메일 중복 검사 서비스 진입 >>");
        return sqlSession.selectOne("usedEmailCheck",member_email);
    }

    // 회원가입 처리
    public void insertMember(MemberVO memberVO){
        log.info("<<MemberDAO>> insertMember parameter : MemberVO = " + memberVO);
        sqlSession.insert("insertMember",memberVO);
    }

    // 회원 권한 추가
    public void insertMemberRole(MemberRole memberRole){
        sqlSession.insert("insertMemberRole", memberRole);
    }

    // 회원 권한 조회
    public MemberRole selectMemberRoleByNum(Integer member_num){
        log.info("<<MemberRole >> 회원 권한 조회 ");
        return sqlSession.selectOne("selectMemberRoleByNum",member_num);
    }

    // 로그인 처리
    public MemberVO selectMemberByEmail(String username){
        log.info("<<MemberDAO>> selectMemberByEmail parameter : member_email " + username);
        return sqlSession.selectOne("selectMemberByEmail",username);
    }
}
