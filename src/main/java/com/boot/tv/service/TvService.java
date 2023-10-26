package com.boot.tv.service;

import com.boot.tv.dao.TvDAO;
import com.boot.tv.dto.TvDTO;
import com.boot.tv.vo.TvDetailVO;
//import com.boot.tv.vo.TvVO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TvService {

    private final TvDAO tvDAO;

    // tv 목록 조회
    public List<TvDTO> selectTvList(){
        return tvDAO.selectTvList();
    }

    // tv 상세 정보 조회
    public TvDetailVO selectTvDetail(int tv_num){
        return tvDAO.selectTvDetail(tv_num);
    }

}
