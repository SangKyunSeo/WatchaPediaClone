package com.boot.person.dto;

import com.boot.person.vo.MovieCastVO;
import lombok.Data;

@Data
public class MovieCastDTO {
    private int person_item_num;
    private int person_num;
    private int item_type;
    private int item_num;
    private String person_item_role;
    private String person_name;
    private String image_url;
    private String image_oname;
    public MovieCastDTO voToDto(MovieCastVO movieCastVO){
        MovieCastDTO movieCastDTO = new MovieCastDTO();
        movieCastDTO.setPerson_item_num(movieCastVO.getPerson_item_num());
        movieCastDTO.setPerson_num(movieCastVO.getPerson_num());
        movieCastDTO.setItem_type(movieCastVO.getItem_type());
        movieCastDTO.setItem_num(movieCastVO.getItem_num());
        movieCastDTO.setPerson_item_role(movieCastVO.getPerson_item_role());
        movieCastDTO.setPerson_name(movieCastVO.getPerson_name());
        movieCastDTO.setImage_url(movieCastVO.getImage_url());
        movieCastDTO.setImage_oname(movieCastVO.getImage_oname());

        return movieCastDTO;
    }
}
