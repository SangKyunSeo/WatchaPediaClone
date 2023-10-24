package com.boot.genre.dao;

import com.boot.genre.vo.MovieGenreVO;
import com.boot.genre.vo.TvGenreVO;
import lombok.extern.slf4j.Slf4j;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
@Slf4j
public class TvGenreDAO {

    @Autowired
    private SqlSessionTemplate sqlSession;

    // 영화 장르 조회
    public List<TvGenreVO> selectTvGenre(Integer tv_num){
        return sqlSession.selectList("selectTvGenre", tv_num);
    }
}
