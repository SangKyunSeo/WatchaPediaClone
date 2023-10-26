package com.boot.movie.dao;

//import com.boot.member.dto.MemberRole;
//import com.boot.member.vo.MemberVO;
import com.boot.movie.dto.MovieDTO;
//import com.boot.movie.vo.MovieVO;
import lombok.extern.slf4j.Slf4j;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
@Slf4j
public class MovieDAO {

    @Autowired
    private SqlSessionTemplate sqlSession;

    // 영화 목록 조회
    public List<MovieDTO> selectMovieList(){
        log.info("<< 영화 목록 조회 DAO 진입 >>");
        return sqlSession.selectList("selectMovieList");
    }

    // 영화 상세 정보 조회
    public MovieDTO selectMovieDetail(Integer movie_num){
        return sqlSession.selectOne("selectMovieDetail",movie_num);
    }
}
