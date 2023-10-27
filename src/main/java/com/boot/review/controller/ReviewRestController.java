package com.boot.review.controller;

import com.boot.review.service.ReviewService;
import com.boot.review.vo.ReviewAvgScoreVO;
import com.boot.review.vo.ReviewVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/api")
public class ReviewRestController {

    private final ReviewService reviewService;

    // 리뷰 데이터 삽입
    @PostMapping("/setReview")
    public ReviewVO setReview(@RequestBody ReviewVO reviewVO){
        log.info("<< 리뷰 데이터 삽입 진입 >>");
        log.info("파라미터 : ReviewVO = " + reviewVO);

        reviewService.setReview(reviewVO);
        int review_num = reviewVO.getReview_num();

        ReviewVO db_reviewVO = reviewService.getReviewInfoByReviewNum(review_num);

        log.info("삽입한 데이터 조회 : ReviewVO = " + db_reviewVO);
        return db_reviewVO;
    }

    // 리뷰 데이터 삭제 API
    @GetMapping("/deleteReview")
    public boolean deleteReview(@RequestParam int review_num){
        log.info("<< 리뷰 삭제 진입 >>");
        log.info("파라미터 : review_num = " + review_num);

        reviewService.deleteReview(review_num);
        return true;
    }

    // 리뷰 수정 API
    @PostMapping("/updateReview")
    public ReviewVO updateReview(@RequestBody ReviewVO reviewVO){
        log.info("<< 리뷰 수정 진입 >>");
        log.info("파라미터 : ReviewVO = " + reviewVO);

        // 리뷰 수정 작업
        reviewService.updateReview(reviewVO);

        // 수정한 리뷰 조회 작업
        ReviewVO db_reviewVO = reviewService.getReviewInfoByReviewNum(reviewVO.getReview_num());

        return db_reviewVO;
    }

    // 리뷰 목록 조회 API
    @GetMapping("/getReviewList")
    public List<ReviewVO> getReviewList(@RequestParam int review_item_type, @RequestParam int review_item_num){
        log.info("<< 리뷰 목록 조회 진입 >>");
        log.info("파라미터 : review_item_type = " + review_item_type + ", review_item_num = " + review_item_num);
        Map<String, Object> map = new HashMap<>();
        map.put("review_item_type", review_item_type);
        map.put("review_item_num", review_item_num);

        List<ReviewVO> reviewVOList = null;
        reviewVOList = reviewService.getReviewList(map);

        log.info("ReviewVO LIST : " + reviewVOList);
        return reviewVOList;
    }

    // 리뷰 평균 점수 조회 API
    @GetMapping("/getReviewAvgScore")
    public ReviewAvgScoreVO getReviewAvgScore(@RequestParam int review_item_type, @RequestParam int review_item_num){
        log.info("<< 리뷰 평균 점수 조회 API 진입 >>");
        log.info("파라미터 : review_item_type = " + review_item_type + ", review_item_num = " + review_item_num);
        Map<String, Object> map = new HashMap<>();
        map.put("review_item_type", review_item_type);
        map.put("review_item_num", review_item_num);

        ReviewAvgScoreVO reviewAvgScoreVO = reviewService.getReviewAvgScore(map);

        log.info("[[ API 결과 ]] : ReviewAvgScoreVO = " + reviewAvgScoreVO);

        return reviewAvgScoreVO;
    }
}
