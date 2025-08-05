import {ResponseCode} from "../../../../global/interfaces/response-code.interface";


export enum UserErrorCodeEnum {
  USER_ALREADY_EXISTS = 'USER_409',
  INVALID_CREDENTIALS = 'USER_401',
}

export const UserErrorCode: Record<UserErrorCodeEnum, ResponseCode> = {
  [UserErrorCodeEnum.USER_ALREADY_EXISTS]: {
    code: UserErrorCodeEnum.USER_ALREADY_EXISTS,
    message: '이미 존재하는 이메일입니다.',
  },
  [UserErrorCodeEnum.INVALID_CREDENTIALS]: {
    code: UserErrorCodeEnum.INVALID_CREDENTIALS,
    message: '이메일 또는 비밀번호가 일치하지 않습니다.',
  },
};