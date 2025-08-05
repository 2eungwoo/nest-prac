import { Injectable } from '@nestjs/common';
import { OpenAiChatUseCase } from '../usecase/openai-chat.usecase.interface';
import { OpenaiClient } from '../../../infrastructure/external/ai/openai.client';

@Injectable()
export class OpenAiChatService implements OpenAiChatUseCase {
  constructor(private readonly openaiClient: OpenaiClient) {}

  async chat(prompt: string): Promise<string> {
    return this.openaiClient.createChatCompletion(prompt);
  }
}