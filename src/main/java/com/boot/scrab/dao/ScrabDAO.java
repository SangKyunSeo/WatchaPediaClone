package com.boot.scrab.dao;

import com.boot.scrab.vo.ScrabVO;
import lombok.extern.slf4j.Slf4j;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Repository
@Slf4j
public class ScrabDAO {

    @Autowired
    private SqlSessionTemplate sqlSession;

    // 스크랩 정보 조회
    public ScrabVO selectScrab(Map<String, Object> map){
        return sqlSession.selectOne("selectScrab", map);
    }

    // 보고싶어요 스크랩 정보 삽입
    public void setWishWatch(ScrabVO scrabVO){
        sqlSession.insert("setWishWatch",scrabVO);
    }

    // 보고싶어요 삭제
    public void deleteWishWatch(ScrabVO scrabVO){
        sqlSession.delete("deleteWishWatch", scrabVO);
    }

    // 보고싶어요, 보는중 업데이트
    public void updateScrabType(ScrabVO scrabVO){
        sqlSession.update("updateScrabType", scrabVO);
    }

    // 스크랩 정보 조회
    public ScrabVO selectScrabInfo(ScrabVO scrabVO){
        return sqlSession.selectOne("selectScrabInfo", scrabVO);
    }

}
