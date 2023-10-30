package com.boot.reple.service;

import com.boot.reple.dao.RepleDAO;
import com.boot.reple.dto.RepleSetDTO;
import com.boot.reple.vo.RepleSetVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class RepleService {

    private final RepleDAO repleDAO;


    // 리뷰 작성 여부 확인 서비스
    public int isWriteBefore(RepleSetDTO repleSetDTO){

        log.info("<< 리뷰 작성 여부 확인 서비스 진입 >>");
        log.info("파라미터 : RepleSetDTO = " + repleSetDTO);

        RepleSetVO repleSetVO = new RepleSetVO();
        repleSetVO = repleSetVO.toVO(repleSetDTO);

        return repleDAO.isWriteBefore(repleSetVO);
    }
    // 리뷰 리플 등록 서비스
    public void setReple(RepleSetDTO repleSetDTO){

        log.info("<< 리뷰 리플 등록 서비스 진입 >>");
        log.info("파라미터 : RepleSetDTO = " + repleSetDTO);

        RepleSetVO repleSetVO = new RepleSetVO();

        repleSetVO = repleSetVO.toVO(repleSetDTO);

        repleDAO.setReple(repleSetVO);
    }


}
