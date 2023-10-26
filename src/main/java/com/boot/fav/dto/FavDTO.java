package com.boot.fav.dto;

import com.boot.fav.vo.FavVO;
import lombok.Data;

@Data
public class FavDTO {

    private int fav_num;
    private int member_num;
    private int fav_item_type;
    private int fav_item_num;

    public FavDTO voToDto(FavVO favVO){
        FavDTO favDTO = new FavDTO();
        favDTO.setFav_num(favVO.getFav_num());
        favDTO.setFav_item_num(favVO.getFav_item_num());
        favDTO.setFav_item_type(favVO.getFav_item_type());
        favDTO.setMember_num(favVO.getMember_num());

        return favDTO;
    }
}
