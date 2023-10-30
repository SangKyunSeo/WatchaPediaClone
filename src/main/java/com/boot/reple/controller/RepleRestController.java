package com.boot.reple.controller;

import com.boot.reple.dto.RepleSetDTO;
import com.boot.reple.service.RepleService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/api")
public class RepleRestController {

    private final RepleService repleService;

    // 리뷰 리플 등록 API
    @PostMapping("/setReple")
    public boolean setReple(@RequestParam int member_num, @RequestParam int review_num, @RequestParam String reple_content){
        log.info("<< 리뷰 리플 등록 API 진입 >>");
        log.info("파라미터 : member_num = " + member_num + ", review_num = " + review_num + ", reple_content = " + reple_content);

        RepleSetDTO repleSetDTO = new RepleSetDTO();
        repleSetDTO.setMemberNum(member_num);
        repleSetDTO.setReviewRepleContent(reple_content);
        repleSetDTO.setReviewNum(review_num);

        int count = 0;
        count = repleService.isWriteBefore(repleSetDTO);

        if(count > 0) return false;

        repleService.setReple(repleSetDTO);

        return true;
    }
}
