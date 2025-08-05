import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';

import {AiController} from '../../../presentation/ai/ai.controller';
import {OpenAiChatService} from "../../../application/ai/service/openai-chat.service";
import {
  OpenAIChooseStyleService
} from "../../../application/ai/service/openai-choose.style.service";
import {OpenaiClient} from "./utils/openai.client";
import {OpenaiConfig} from "../../../config/openai.config";


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