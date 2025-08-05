import {HttpStatus} from "@nestjs/common";
import {ResponseCode} from "../../../global/interfaces/response-code.interface";

export enum DreamErrorCodeEnum {
  DREAM_NOT_FOUND = 'DREAM_NOT_FOUND',
}

export const DreamErrorCode: Record<DreamErrorCodeEnum, ResponseCode> = {
  [DreamErrorCodeEnum.DREAM_NOT_FOUND]: {
    status: HttpStatus.NOT_FOUND,
    code: 'D401',
    message: '꿈을 찾을 수 없습니다.',
  },
};