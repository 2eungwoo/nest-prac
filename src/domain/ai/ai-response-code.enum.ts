import {ResponseCode} from "../../common/responess/response-code.interface";

export enum AIResponseCodeEnum {
  AI_CHAT_SUCCESS = 'AI_200',
}

export const AIResponseCode: Record<AIResponseCodeEnum, ResponseCode> = {
  [AIResponseCodeEnum.AI_CHAT_SUCCESS]: {
    code: AIResponseCodeEnum.AI_CHAT_SUCCESS,
    message: 'AI 응답이 성공했습니다.',
  },
};