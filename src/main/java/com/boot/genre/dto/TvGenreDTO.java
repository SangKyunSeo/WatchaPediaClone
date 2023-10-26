package com.boot.genre.dto;

//import com.boot.genre.vo.MovieGenreVO;
import com.boot.genre.vo.TvGenreVO;
import lombok.Data;

@Data
public class TvGenreDTO {

    private int tv_genre_num;
    private int tv_num;
    private int genre_num;
    private String genre_name;

    public TvGenreDTO voToDto(TvGenreVO tvGenreVO){
        TvGenreDTO tvGenreDTO = new TvGenreDTO();
        tvGenreDTO.setTv_genre_num(tvGenreVO.getTv_genre_num());
        tvGenreDTO.setTv_num(tvGenreVO.getTv_num());
        tvGenreDTO.setGenre_num(tvGenreVO.getGenre_num());
        tvGenreDTO.setGenre_name(tvGenreVO.getGenre_name());
        return tvGenreDTO;
    }

}
