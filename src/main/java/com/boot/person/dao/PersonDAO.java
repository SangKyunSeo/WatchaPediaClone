package com.boot.person.dao;

import com.boot.person.vo.MovieCastVO;
import com.boot.person.vo.PersonDetailVO;
import com.boot.person.vo.PersonMovieVO;
import com.boot.person.vo.PersonTvVO;
import lombok.extern.slf4j.Slf4j;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
@Slf4j
public class PersonDAO {

    @Autowired
    private SqlSessionTemplate sqlSession;

    // 영화별 출연/감독 정보 조회
   public List<MovieCastVO> selectMovieCast(Integer movie_num){
       return sqlSession.selectList("selectMovieCast", movie_num);
   }

    // 인물 상세 정보 조회
    public PersonDetailVO getPersonDetail(Integer person_num){
       return sqlSession.selectOne("getPersonDetail", person_num);
    }

    // 출연 영화 정보 조회
    public List<PersonMovieVO> getPersonMovieList(Integer person_num){
       return sqlSession.selectList("getPersonMovieList",person_num);
    }

    // 출연 TV 정보 조회
    public List<PersonTvVO> getPersonTvList(Integer person_num){
       return sqlSession.selectList("getPersonTvList", person_num);
    }
}
