package com.boot.genre.dao;

import com.boot.genre.vo.MovieGenreVO;
import lombok.extern.slf4j.Slf4j;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
@Slf4j
public class MovieGenreDAO {

    @Autowired
    private SqlSessionTemplate sqlSession;

    // 영화 장르 조회
    public List<MovieGenreVO> selectMovieGenre(Integer movie_num){
        log.info("<< 영화 장르 조회 DAO 진입 >>");
        return sqlSession.selectList("selectMovieGenre", movie_num);
    }
}
