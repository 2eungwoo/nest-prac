import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';

import {AiController} from '../../../presentation/ai/ai.controller';
import {ChatService} from "../../../application/ai/service/chat.service";
import {
  ChooseStyleService
} from "../../../application/ai/service/choose.style.service";
import {OpenaiClient} from "./utils/openai.client";
import {OpenaiConfig} from "../../../config/openai.config";


@Module({
  imports: [ConfigModule],
  controllers: [AiController],
  providers: [
    ChatService,
    ChooseStyleService,
    OpenaiClient,
    OpenaiConfig,
    {
      provide: 'ChatUsecase',
      useExisting: ChatService,
    },
    {
      provide: 'ChooseStyleUsecase',
      useExisting: ChooseStyleService,
    },
  ],
})
export class AiModule {
}