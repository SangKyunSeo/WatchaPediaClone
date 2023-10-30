package com.boot.reple.dao;

import com.boot.reple.vo.RepleSetVO;
import lombok.extern.slf4j.Slf4j;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
@Slf4j
public class RepleDAO {

    @Autowired
    SqlSessionTemplate sqlSession;

    // 리뷰 작성 여부 확인
    public int isWriteBefore(RepleSetVO repleSetVO){
        log.info("<< 리뷰 작성 여부 확인 DAO 진입 >>");
        log.info("파라미터 : RepleSetVO = " + repleSetVO);

        return sqlSession.selectOne("isWriteBefore", repleSetVO);
    }
    // 리뷰 리플 등록
    public void setReple(RepleSetVO repleSetVO){
        log.info("<< 리뷰 리플 등록 DAO 진입 >>");
        log.info("파라미터 : RepleSetVO = " + repleSetVO);

        sqlSession.insert("setReple", repleSetVO);
    }
}
