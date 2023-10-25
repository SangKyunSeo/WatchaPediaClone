package com.boot.person.dto;

import com.boot.person.vo.TvCastVO;
import lombok.Data;

@Data
public class TvCastDTO {
    private int person_item_num;
    private int person_num;
    private String person_name;
    private String person_item_role;
    private String image_oname;

    public TvCastDTO voToDto(TvCastVO tvCastVO){
        TvCastDTO tvCastDTO = new TvCastDTO();
        tvCastDTO.setImage_oname(tvCastVO.getImage_oname());
        tvCastDTO.setPerson_name(tvCastVO.getPerson_name());
        tvCastDTO.setPerson_item_num(tvCastVO.getPerson_item_num());
        tvCastDTO.setPerson_num(tvCastVO.getPerson_num());
        tvCastDTO.setPerson_item_role(tvCastVO.getPerson_item_role());

        return tvCastDTO;
    }
}
