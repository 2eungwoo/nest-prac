import { Injectable } from '@nestjs/common';
import { OpenaiConfig } from './openai.config';

@Injectable()
export class OpenaiClient {
  constructor(private readonly config: OpenaiConfig) {}

  async createChatCompletion(systemPrompt: string, userPrompt: string): Promise<string> {
    const openai = this.config.getClient();

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt },],
    });

    return response.choices[0]?.message.content ?? '';
  }
}