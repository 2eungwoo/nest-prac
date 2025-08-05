import { AIStyle } from './ai-style.enum';

export class AIStyleStore {
  private static currentStyle: AIStyle = AIStyle.KIND;

  static setStyle(style: AIStyle) {
    this.currentStyle = style;
  }

  static getStyle(): AIStyle {
    return this.currentStyle;
  }
}