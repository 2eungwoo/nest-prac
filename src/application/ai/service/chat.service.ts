import {Inject, Injectable} from '@nestjs/common';
import {OpenaiClient} from '../../../infrastructure/external/ai/utils/openai.client';
import {ChatUsecase} from "../usecase/chat.usecase";
import {ChatRequestDto} from "../dto/chat-request.dto";
import {AIStyleStore} from "../../../infrastructure/external/ai/utils/ai-style-store";
import {AIStyleFactory} from "../../../infrastructure/external/ai/utils/ai-style.factory";
import type {DreamSaveUseCase} from "../../dreams/usecase/dream.save.usecase";
import {AIResult} from "../dto/ai.result";

@Injectable()
export class ChatService implements ChatUsecase {
  constructor(private readonly openaiClient: OpenaiClient,
              @Inject('DreamSaveUseCase')
              private readonly dreamSaveUseCase: DreamSaveUseCase,) {
  }

  async chat(request: ChatRequestDto): Promise<string> {
    const style = AIStyleStore.getStyle();
    const systemPrompt = AIStyleFactory.getSystemPrompt(style);
    const result = await this.openaiClient.createChatCompletion(systemPrompt, request.prompt);

    await this.saveDreamResult(request.userId, request.prompt, result);

    return result;
  }


  private async saveDreamResult(userId: string, description: string, interpretation: string): Promise<void> {
    const result = AIResult.of(userId, description, interpretation);
    await this.dreamSaveUseCase.save(result);
  }
}