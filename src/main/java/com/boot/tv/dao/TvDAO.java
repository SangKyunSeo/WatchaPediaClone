package com.boot.tv.dao;

import com.boot.tv.dto.TvDTO;
import com.boot.tv.vo.TvDetailVO;
import com.boot.tv.vo.TvVO;
import lombok.extern.slf4j.Slf4j;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
@Slf4j
public class TvDAO {

    @Autowired
    private SqlSessionTemplate sqlSession;

    // tv 목록 조회
    public List<TvDTO> selectTvList(){
        return sqlSession.selectList("selectTvList");
    }

    // tv 상세 정보 조회
    public TvDetailVO selectTvDetail(int tv_num){
        return sqlSession.selectOne("selectTvDetail", tv_num);
    }

}
