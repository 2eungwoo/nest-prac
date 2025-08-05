export class AIResult {
  private constructor(
      public readonly userId: string,
      public readonly description: string,
      public readonly style: string,
      public readonly interpretation: string,
  ) {
  }

  static of(userId: string, description: string, style: string, interpretation: string): AIResult {
    return new AIResult(userId, description, style, interpretation);
  }
}