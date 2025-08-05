import {HttpStatus} from "@nestjs/common";
import {ResponseCode} from "../../../../global/interfaces/response-code.interface";

export enum DreamResponseEnum {
  DREAM_GET_SUCCESS = 'DREAM_GET_SUCCESS',
  DREAM_ALL_GET_SUCCESS = 'DREAM_ALL_GET_SUCCESS',
}


export const DreamResponse: Record<DreamResponseEnum, ResponseCode> = {
  [DreamResponseEnum.DREAM_GET_SUCCESS]: {
    status: HttpStatus.OK,
    code: 'D201',
    message: '꿈 상세 조회 성공',
  },
  [DreamResponseEnum.DREAM_ALL_GET_SUCCESS]: {
    status: HttpStatus.OK,
    code: 'D202',
    message: '꿈 목록 조회 성공',
  },
};