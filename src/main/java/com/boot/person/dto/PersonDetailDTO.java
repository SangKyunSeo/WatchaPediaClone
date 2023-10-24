package com.boot.person.dto;

import com.boot.person.vo.PersonDetailVO;
import lombok.Data;

@Data
public class PersonDetailDTO {
    private int person_num;
    private String person_name;
    private int person_job;
    private String person_content;

    private String image_oname;

    public PersonDetailDTO voToDto(PersonDetailVO personDetailVO){
        PersonDetailDTO personDetailDTO = new PersonDetailDTO();

        personDetailDTO.setPerson_job(personDetailVO.getPerson_job());
        personDetailDTO.setPerson_name(personDetailVO.getPerson_name());
        personDetailDTO.setPerson_num(personDetailVO.getPerson_num());
        personDetailDTO.setPerson_content(personDetailVO.getPerson_content());
        personDetailDTO.setImage_oname(personDetailVO.getImage_oname());

        return personDetailDTO;
    }
}
