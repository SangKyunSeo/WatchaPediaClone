package com.boot.person.dto;

import com.boot.person.vo.PersonMovieVO;
import lombok.Data;


@Data
public class PersonMovieDTO {
    private int movie_num;
    private String movie_name;
    private int movie_open;
    private String person_item_role;
    private String image_oname;
    private double review_avg;

    public PersonMovieDTO voToDto(PersonMovieVO personMovieVO){
        PersonMovieDTO personMovieDTO = new PersonMovieDTO();
        personMovieDTO.setMovie_num(personMovieVO.getMovie_num());
        personMovieDTO.setMovie_name(personMovieVO.getMovie_name());
        personMovieDTO.setMovie_open(personMovieVO.getMovie_open());
        personMovieDTO.setPerson_item_role(personMovieVO.getPerson_item_role());
        personMovieDTO.setImage_oname(personMovieVO.getImage_oname());
        personMovieDTO.setReview_avg(personMovieVO.getReview_avg());

        return personMovieDTO;
    }
}
