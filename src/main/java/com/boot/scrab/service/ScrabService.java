package com.boot.scrab.service;

import com.boot.scrab.dao.ScrabDAO;
import com.boot.scrab.vo.ScrabVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Map;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional
public class ScrabService {

    private final ScrabDAO scrabDAO;

    // 스크랩 정보 조회
    public ScrabVO selectScrab(Map<String, Object> map){
        log.info("<< 스크랩 정보 조회 서비스 진입 >>");
        return scrabDAO.selectScrab(map);
    }

    // 보고싶어요 스크랩 정보 삽입
    public void setWishWatch(ScrabVO scrabVO){
        log.info("<< 보고싶어요 스크랩 정보 삽입 서비스 진입 >>");
         scrabDAO.setWishWatch(scrabVO);
    }

    // 보고싶어요 삭제
    public ScrabVO deleteWishWatch(ScrabVO scrabVO){
        log.info("<< 보고싶어요 삭제 서비스 진입 >>");
        scrabDAO.deleteWishWatch(scrabVO);
        return scrabDAO.selectScrabInfo(scrabVO);
    }

    // 보고싶어요, 보는중 업데이트
    public ScrabVO updateScrabType(ScrabVO scrabVO){
        log.info("<< 보고싶어요, 보는중 업데이트 서비스 진입 >>");
        scrabDAO.updateScrabType(scrabVO);
        return scrabDAO.selectScrabInfo(scrabVO);
    }

    public ScrabVO selectScrabInfo(ScrabVO scrabVO){
        return scrabDAO.selectScrabInfo(scrabVO);
    }

}
