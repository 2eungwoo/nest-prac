import {ResponseCode} from "../../../global/interfaces/response-code.interface";


export enum UserResponseCodeEnum {
  SIGNUP_SUCCESS = 'USER_201',
  LOGIN_SUCCESS = 'USER_200',
}

export const UserResponseCode: Record<UserResponseCodeEnum, ResponseCode> = {
  [UserResponseCodeEnum.SIGNUP_SUCCESS]: {
    code: UserResponseCodeEnum.SIGNUP_SUCCESS,
    message: '회원가입이 완료되었습니다.',
  },
  [UserResponseCodeEnum.LOGIN_SUCCESS]: {
    code: UserResponseCodeEnum.LOGIN_SUCCESS,
    message: '로그인에 성공했습니다.',
  },
};