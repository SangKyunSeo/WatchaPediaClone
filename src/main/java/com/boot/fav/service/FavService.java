package com.boot.fav.service;

import com.boot.fav.dao.FavDAO;
import com.boot.fav.dto.FavDTO;
import com.boot.fav.dto.FavTotalDTO;
import com.boot.fav.vo.FavTotalVO;
import com.boot.fav.vo.FavVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
@RequiredArgsConstructor
@Slf4j
public class FavService {

    private final FavDAO favDAO;

    // 좋아요 개수 서비스
    public FavTotalDTO getFavTotal(Map<String, Object> map){

        log.info("<< 좋아요 토탈 서비스 진입 >>");

        FavTotalVO favTotalVO = favDAO.getFavTotal(map);

        log.info("서비스 VO 결과 : FavTotalVO = " + favTotalVO);

        FavTotalDTO favTotalDTO = new FavTotalDTO();
        favTotalDTO = favTotalDTO.voToDto(favTotalVO);

        log.info("서비스 DTO 결과 : FavPersonTotalDTO = " + favTotalDTO);
        return favTotalDTO;
    }

    // 내가 좋아요 누른 정보 서비스
    public FavDTO getMyFavInfo(Map<String, Object> map){

        log.info("<< 내가 좋아요 누른 정보 서비스 진입 >>");

        FavVO favVO = favDAO.getMyFavInfo(map);

        log.info("서비스 VO 결과 : FavVO = " + favVO);

        FavDTO favDTO = new FavDTO();

        if(favVO != null){
            favDTO = favDTO.voToDto(favVO);
        }else{
            favDTO = null;
        }
        log.info("서비스 DTO 결과 : FavDTO = " + favDTO);
        return favDTO;
    }

    // 좋아요 데이터 삽입 서비스
    public void setFav(FavDTO favDTO){

        log.info("<< 좋아요 데이터 삽입 서비스 진입 >>");
        FavVO favVO = new FavVO();
        favVO = favVO.DtoToVo(favDTO);

        favDAO.setFav(favVO);
    }

    // 좋아요 데이터 삭제 서비스
    public void deleteFav(FavDTO favDTO){

        log.info("<< 좋아요 데이터 삭제 서비스 진입 >>");

        FavVO favVO = new FavVO();
        favVO = favVO.DtoToVo(favDTO);

        favDAO.deleteFav(favVO);
    }
}
