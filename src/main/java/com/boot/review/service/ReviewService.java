package com.boot.review.service;

import com.boot.review.dao.ReviewDAO;
import com.boot.review.vo.ReviewAvgScoreVO;
import com.boot.review.vo.ReviewVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional
public class ReviewService {

    private final ReviewDAO reviewDAO;

    // 리뷰 목록 조회
    public ReviewVO getReviewInfo(Map<String, Object> map){
        log.info("<< 리뷰 목록 조회 서비스 진입 >>");
        return reviewDAO.getReviewInfo(map);
    }

    // 리뷰 번호로 리뷰 데이터 조회
    public ReviewVO getReviewInfoByReviewNum(Integer review_num){
        log.info("<< 리뷰 번호로 리뷰 데이터 조회 서비스 진입 >>");
        return reviewDAO.getReviewInfoByReviewNum(review_num);
    }
    
    // 리뷰 데이터 삽입
    public void setReview(ReviewVO reviewVO){
        log.info("<< 리뷰 데이터 삽입 서비스 진입 >>");
        reviewDAO.setReview(reviewVO);
    }

    // 리뷰 데이터 삭제
    public void deleteReview(Integer review_num){
        log.info("<< 리뷰 데이터 삭제 서비스 진입 >>");
        reviewDAO.deleteReview(review_num);
    }

    // 리뷰 수정
    public void updateReview(ReviewVO reviewVO){
        log.info("<< 리뷰 수정 서비스 진입 >>");
        reviewDAO.updateReview(reviewVO);
    }

    // 리뷰 목록 조회
    public List<ReviewVO> getReviewList(Map<String, Object> map){
        log.info("<< 리뷰 목록 조회 서비스 진입 >>");
        return reviewDAO.getReviewList(map);
    }

    // 리뷰 평균 점수 조회
    public ReviewAvgScoreVO getReviewAvgScore(Map<String, Object> map){
        log.info("<< 리뷰 평균 점수 조회 서비스 진입 >>");
        return reviewDAO.getReviewAvgScore(map);
    }
}
