import {ResponseCode} from "../../../../global/interfaces/response-code.interface";

export enum AIResponseCodeEnum {
  AI_CHAT_SUCCESS = 'AI_200',
  AI_CHOOSE_STYLE_SUCCESS = 'AI_STYLE_200'
}

export const AIResponseCode: Record<AIResponseCodeEnum, ResponseCode> = {
  [AIResponseCodeEnum.AI_CHAT_SUCCESS]: {
    code: AIResponseCodeEnum.AI_CHAT_SUCCESS,
    message: 'AI 응답이 성공했습니다.',
  },

  [AIResponseCodeEnum.AI_CHOOSE_STYLE_SUCCESS]: {
    code: AIResponseCodeEnum.AI_CHOOSE_STYLE_SUCCESS,
    message: 'AI 유형 선택이 성공했습니다.',
  },
};


