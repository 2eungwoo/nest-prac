import {ResponseCode} from "../../../../global/interfaces/response-code.interface";


export enum UserErrorCodeEnum {
  USER_ALREADY_EXISTS = 'USER_409',
  INVALID_CREDENTIALS = 'USER_401',
  USER_NOT_FOUND = 'USER_404',
}

export const UserErrorCode: Record<UserErrorCodeEnum, ResponseCode> = {
  [UserErrorCodeEnum.USER_ALREADY_EXISTS]: {
    status:409,
    code: UserErrorCodeEnum.USER_ALREADY_EXISTS,
    message: '이미 존재하는 이메일입니다.',
  },
  [UserErrorCodeEnum.INVALID_CREDENTIALS]: {
    status:401,
    code: UserErrorCodeEnum.INVALID_CREDENTIALS,
    message: '이메일 또는 비밀번호가 일치하지 않습니다.',
  },
  [UserErrorCodeEnum.USER_NOT_FOUND]: {
    status:404,
    code: UserErrorCodeEnum.USER_NOT_FOUND,
    message: '유저를 찾을 수 없습니다.',
  },
};