import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';

import {AiController} from './ai.controller';
import {OpenAiChatService} from '../../application/ai/service/openai-chat.service';
import {OpenaiConfig} from "../../infrastructure/external/ai/openai.config";
import {OpenaiClient} from "../../infrastructure/external/ai/openai.client";
import {
  OpenAIChooseStyleService
} from "../../application/ai/service/openai-choose.style.service";

@Module({
  imports: [ConfigModule],
  controllers: [AiController],
  providers: [
    OpenAiChatService,
    OpenAIChooseStyleService,
    OpenaiClient,
    OpenaiConfig,
    {
      provide: 'OpenAiChatUseCase',
      useExisting: OpenAiChatService,
    },
    {
      provide: 'ChooseStyleUseCase',
      useExisting: OpenAIChooseStyleService,
    },
  ],
})
export class AiModule {
}