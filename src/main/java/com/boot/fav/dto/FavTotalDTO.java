package com.boot.fav.dto;

import com.boot.fav.vo.FavTotalVO;
import lombok.Data;

@Data
public class FavTotalDTO {
    private int fav_Total;

    public FavTotalDTO voToDto(FavTotalVO favTotalVO){
        FavTotalDTO favTotalDTO = new FavTotalDTO();
        favTotalDTO.setFav_Total(favTotalVO.getFav_Total());

        return favTotalDTO;
    }
}
