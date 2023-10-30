package com.boot.reple.vo;

import com.boot.reple.dto.RepleSetDTO;
import lombok.Data;

@Data
public class RepleSetVO {

    private int reviewNum;
    private int memberNum;
    private String reviewRepleContent;

    public RepleSetVO toVO(RepleSetDTO repleSetDTO){
        RepleSetVO repleSetVO = new RepleSetVO();
        repleSetVO.setReviewRepleContent(repleSetDTO.getReviewRepleContent());
        repleSetVO.setReviewNum(repleSetDTO.getReviewNum());
        repleSetVO.setMemberNum(repleSetDTO.getMemberNum());

        return repleSetVO;
    }
}
