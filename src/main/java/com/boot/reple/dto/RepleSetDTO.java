package com.boot.reple.dto;

import com.boot.reple.vo.RepleSetVO;
import lombok.Data;

@Data
public class RepleSetDTO {

    private int reviewNum;
    private int memberNum;
    private String reviewRepleContent;

    public RepleSetDTO toDTO(RepleSetVO repleSetVO){
        RepleSetDTO repleSetDTO = new RepleSetDTO();
        repleSetDTO.setReviewRepleContent(repleSetVO.getReviewRepleContent());
        repleSetDTO.setReviewNum(repleSetVO.getReviewNum());
        repleSetDTO.setMemberNum(repleSetVO.getMemberNum());

        return repleSetDTO;
    }
}
