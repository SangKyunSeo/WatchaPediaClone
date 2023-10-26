package com.boot.fav.dao;

import com.boot.fav.vo.FavTotalVO;
import com.boot.fav.vo.FavVO;
import lombok.extern.slf4j.Slf4j;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Map;

@Repository
@Transactional
@Slf4j
public class FavDAO {

    @Autowired
    private SqlSessionTemplate sqlSession;

    // 좋아요 개수 조회
    public FavTotalVO getFavTotal(Map<String, Object> map){
        log.info("<< 좋아요 토탈 개수 DAO 진입 >>");
        return sqlSession.selectOne("getFavTotal", map);
    }

    // 내가 좋아요 누른 정보
    public FavVO getMyFavInfo(Map<String, Object> map){
        log.info("<< 내가 좋아요 누른 정보 DAO 진입 >>");
        return sqlSession.selectOne("getMyFavInfo",map);
    }

    // 좋아요 데이터 삽입
    public void setFav(FavVO favVO){
        log.info("<< 좋아요 데이터 삽입 DAO 진입 >>");
        sqlSession.insert("setFav", favVO);
    }

    // 좋아요 데이터 삭제
    public void deleteFav(FavVO favVO){
        log.info("<< 좋아요 데이터 삭제 DAO 진입 >>");
        sqlSession.delete("deleteFav", favVO);

    }
}
