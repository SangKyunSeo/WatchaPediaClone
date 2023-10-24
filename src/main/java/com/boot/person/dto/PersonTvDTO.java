package com.boot.person.dto;

import com.boot.person.vo.PersonTvVO;
import lombok.Data;

@Data
public class PersonTvDTO {
    private int tv_num;
    private String tv_name;
    private int tv_open;
    private String person_item_role;
    private String image_oname;
    private double review_avg;

    public PersonTvDTO voToDto(PersonTvVO personTvVO){
        PersonTvDTO personTvDTO = new PersonTvDTO();
        personTvDTO.setPerson_item_role(personTvVO.getPerson_item_role());
        personTvDTO.setReview_avg(personTvVO.getReview_avg());
        personTvDTO.setImage_oname(personTvVO.getImage_oname());
        personTvDTO.setTv_name(personTvVO.getTv_name());
        personTvDTO.setTv_num(personTvVO.getTv_num());
        personTvDTO.setTv_open(personTvVO.getTv_open());

        return personTvDTO;
    }
}
