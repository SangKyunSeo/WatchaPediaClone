package com.boot.review.dao;

import com.boot.review.vo.ReviewAvgScoreVO;
import com.boot.review.vo.ReviewPreviewVO;
import com.boot.review.vo.ReviewVO;
import lombok.extern.slf4j.Slf4j;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
@Slf4j
public class ReviewDAO {

    @Autowired
    private SqlSessionTemplate sqlSession;

    // 리뷰 목록 조회
    public ReviewVO getReviewInfo(Map<String, Object> map){
        log.info("<< 리뷰 목록 조회 DAO 진입 >>");
        return sqlSession.selectOne("getReviewInfo", map);
    }

    // 리뷰 번호로 리뷰 데이터 조회
    public ReviewVO getReviewInfoByReviewNum(Integer review_num){
        return sqlSession.selectOne("getReviewInfoByReviewNum",review_num);
    }

    // 리뷰 데이터 삽입
    public void setReview(ReviewVO reviewVO){
        sqlSession.insert("setReview", reviewVO);
    }

    // 리뷰 삭제
    public void deleteReview(Integer review_num){
        sqlSession.delete("deleteReview", review_num);
    }

    // 리뷰 수정
    public void updateReview(ReviewVO reviewVO){
        sqlSession.update("updateReview", reviewVO);
    }

    // 리뷰 목록
    public List<ReviewVO> getReviewList(Map<String, Object> map){
        return sqlSession.selectList("getReviewList", map);
    }

    // 리뷰 평균 점수
    public ReviewAvgScoreVO getReviewAvgScore(Map<String, Object> map){
        return sqlSession.selectOne("getReviewAvgScore", map);
    }

    // 리뷰 프리뷰 정보 조회
    public ReviewPreviewVO getReviewPreview(Map<String, Object> map){
        return sqlSession.selectOne("getReviewPreview", map);
    }
}
