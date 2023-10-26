package com.boot.fav.vo;

import com.boot.fav.dto.FavDTO;
import lombok.Data;

@Data
public class FavVO {

    private int fav_num;
    private int member_num;
    private int fav_item_type;
    private int fav_item_num;

    public FavVO DtoToVo(FavDTO favDTO){
        FavVO favVO = new FavVO();
        favVO.setFav_num(favDTO.getFav_num());
        favVO.setMember_num(favDTO.getMember_num());
        favVO.setFav_item_type(favDTO.getFav_item_type());
        favVO.setFav_item_num(favDTO.getFav_item_num());

        return favVO;
    }

}
