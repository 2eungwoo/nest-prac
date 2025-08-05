import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { OpenAI } from 'openai';

@Injectable()
export class OpenaiConfig {
  private readonly client: OpenAI;

  constructor(configService: ConfigService) {
    this.client = new OpenAI({
      apiKey: configService.get<string>('OPENAI_API_KEY'),
    });
  }

  getClient(): OpenAI {
    return this.client;
  }
}