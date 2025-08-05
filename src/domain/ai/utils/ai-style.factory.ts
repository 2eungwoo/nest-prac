import {AIStyle, AIStyleType} from "../ai-style.enum";

export class AIStyleFactory {
  static getSystemPrompt(style: AIStyle): string {
    return AIStyleType[style];
  }
}