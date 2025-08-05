export interface OpenAiChatUseCase {
  chat(prompt: string): Promise<string>;
}