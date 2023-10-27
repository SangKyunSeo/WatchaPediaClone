package com.boot.fav.controller;

import com.boot.fav.dto.FavDTO;
import com.boot.fav.service.FavService;
//import com.boot.fav.vo.FavVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/api")
public class FavRestController {

    private final FavService favService;

    // 내가 좋아요 누른 정보 API
    @GetMapping("/getMyFavInfo")
    public boolean getMyFavInfo(@RequestParam int member_num, @RequestParam int fav_item_num, @RequestParam int fav_item_type){

        log.info("<<  내가 좋아요 누른 정보 API 진입 >>");
        log.info("파라미터 : member_num = " + member_num + ", fav_item_num = " + fav_item_num + ", fav_item_type = " + fav_item_type);
        Map<String, Object> map = new HashMap<>();
        map.put("member_num", member_num);
        map.put("fav_item_num", fav_item_num);
        map.put("fav_item_type", fav_item_type);

        FavDTO favDTO = null;
        favDTO = favService.getMyFavInfo(map);

        if(favDTO != null){
            return true;
        }

        return false;
    }

    // 좋아요 데이터 삽입 API
    @GetMapping("/setFav")
    public void setFav(@RequestParam int member_num, @RequestParam int fav_item_type, @RequestParam int fav_item_num){

        log.info("<< 좋아요 데이터 삽입 API 진입 >>");
        log.info("파라미터 : member_num = " + member_num + ", fav_item_type = " + fav_item_type + ", fav_item_num = " + fav_item_num);

        FavDTO favDTO = new FavDTO();
        favDTO.setFav_item_num(fav_item_num);
        favDTO.setFav_item_type(fav_item_type);
        favDTO.setMember_num(member_num);

        favService.setFav(favDTO);

    }

    // 좋아요 데이터 삭제 API
    @GetMapping("/deleteFav")
    public void deleteFav(@RequestParam int member_num, @RequestParam int fav_item_type, @RequestParam int fav_item_num){

        log.info("<< 좋아요 데이터 삭제 API 진입 >>");
        log.info("파라미터 : member_num = " + member_num + ", fav_item_type = " + fav_item_type + ", fav_item_num = " + fav_item_num);

        FavDTO favDTO = new FavDTO();
        favDTO.setMember_num(member_num);
        favDTO.setFav_item_num(fav_item_num);
        favDTO.setFav_item_type(fav_item_type);

        favService.deleteFav(favDTO);

    }
}
