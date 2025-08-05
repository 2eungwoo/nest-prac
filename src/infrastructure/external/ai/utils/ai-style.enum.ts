export enum AIStyle {
  KIND = 1,
  RUDE = 2,
}

export const AIStyleType: Record<AIStyle, string> = {
  [AIStyle.KIND]: '당신은 천사 모드를 선택했습니다. 상냥하고 친절하게, 긍정적인 말투로 응답받습니다.',
  [AIStyle.RUDE]: '당신은 악마 모드를 선택했습니다. 매우 직설적이고 공격적인 말투로 팩트 위주로 응답받습니다.',
};