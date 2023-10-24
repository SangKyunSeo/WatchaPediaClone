package com.boot.scrab.controller;

import com.boot.scrab.service.ScrabService;
import com.boot.scrab.vo.ScrabVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@Slf4j
public class ScrabRestController {

    private final ScrabService scrabService;

    // 보고싶어요 스크랩 정보 수정 API
    @GetMapping("/setWishWatch")
    public ScrabVO setWishWatch(@RequestParam int member_num, @RequestParam int scrab_item_type, @RequestParam int scrab_item_num, @RequestParam int scrab_type){
        log.info("<< 보고 싶어요 Click의 set API 진입 >>");
        log.info("파라미터 : member_num = " + member_num + ", scrab_item_type = " + scrab_item_type + ", scrab_item_num = " + scrab_item_num + ", scrab_type = " + scrab_type);
        Map<String, Object> map = new HashMap<>();
        map.put("member_num",member_num);
        map.put("item_num",scrab_item_num);
        map.put("scrab_item_type", scrab_item_type);

        ScrabVO db_scrabVO = null;
        db_scrabVO = scrabService.selectScrab(map);

        int scrab_num = 0;

        ScrabVO updated_scrabVO = null;

        if(db_scrabVO == null){
            // 데이터 삽입
            ScrabVO scrabVO = new ScrabVO();
            scrabVO.setScrab_type(scrab_type);
            scrabVO.setMember_num(member_num);
            scrabVO.setScrab_item_num(scrab_item_num);
            scrabVO.setScrab_item_type(scrab_item_type);

            scrabService.setWishWatch(scrabVO);
            scrab_num = scrabVO.getScrab_num();
            log.info("<< 삽입된 스크랩 정보의 scrab_num >> : " + scrab_num);
            updated_scrabVO = scrabService.selectScrabInfo(scrabVO);
        }else{
            // 데이터 수정

            // 이미 등록되어 있는데 같은걸 누르면 0으로 데이터 삭제하기
            if(db_scrabVO.getScrab_type() == scrab_type){
                updated_scrabVO = scrabService.deleteWishWatch(db_scrabVO);
            }else{
                // 이미 등록되어 있는데 다른걸 누르면 타입 토글
                updated_scrabVO = scrabService.updateScrabType(db_scrabVO);
            }
        }
        return updated_scrabVO;
    }
}
