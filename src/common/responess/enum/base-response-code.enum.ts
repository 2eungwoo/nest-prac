import { ResponseCode } from '../response-code.interface';

export enum BaseCode {
  OK = 'COMMON_200',
  BAD_REQUEST = 'COMMON_400',
  UNAUTHORIZED = 'COMMON_401',
  FORBIDDEN = 'COMMON_403',
  INTERNAL_ERROR = 'COMMON_500',
}

export const BaseResponseCode: Record<BaseCode, ResponseCode> = {
  [BaseCode.OK]: {
    code: BaseCode.OK,
    message: '요청이 성공적으로 처리되었습니다.',
  },
  [BaseCode.BAD_REQUEST]: {
    code: BaseCode.BAD_REQUEST,
    message: '잘못된 요청입니다.',
  },
  [BaseCode.UNAUTHORIZED]: {
    code: BaseCode.UNAUTHORIZED,
    message: '인증이 필요합니다.',
  },
  [BaseCode.FORBIDDEN]: {
    code: BaseCode.FORBIDDEN,
    message: '접근이 거부되었습니다.',
  },
  [BaseCode.INTERNAL_ERROR]: {
    code: BaseCode.INTERNAL_ERROR,
    message: '서버 내부 오류가 발생했습니다.',
  },
};
