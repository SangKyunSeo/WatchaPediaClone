package com.boot.genre.service;

import com.boot.genre.dao.MovieGenreDAO;
import com.boot.genre.dao.TvGenreDAO;
import com.boot.genre.dto.MovieGenreDTO;
import com.boot.genre.dto.TvGenreDTO;
import com.boot.genre.vo.MovieGenreVO;
import com.boot.genre.vo.TvGenreVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class TvGenreService {

    private final TvGenreDAO tvGenreDAO;

    // 영화 목록 조회
    public List<TvGenreDTO> selectTvGenre(Integer tv_num){
        List<TvGenreVO> tvGenreVOList = tvGenreDAO.selectTvGenre(tv_num);
        List<TvGenreDTO> tvGenreDTOList = new ArrayList<>();

        for(TvGenreVO vo: tvGenreVOList){
            TvGenreDTO tvGenreDTO = new TvGenreDTO();
            tvGenreDTO = tvGenreDTO.voToDto(vo);
            tvGenreDTOList.add(tvGenreDTO);
        }

        return tvGenreDTOList;
    }
}
