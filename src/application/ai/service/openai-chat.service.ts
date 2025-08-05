import {Injectable} from '@nestjs/common';
import {OpenaiClient} from '../../../infrastructure/external/ai/openai.client';
import {OpenAiChatUseCase} from "../usecase/openai-chat.usecase.interface";
import {ChatRequestDto} from "../dto/chat-request.dto";
import {AIStyleStore} from "../../../domain/ai/ai-style-store";
import {AIStyleFactory} from "../../../domain/ai/utils/ai-style.factory";

@Injectable()
export class OpenAiChatService implements OpenAiChatUseCase {
  constructor(private readonly openaiClient: OpenaiClient) {
  }

  async chat(request: ChatRequestDto): Promise<string> {
    const style = AIStyleStore.getStyle();
    const systemPrompt = AIStyleFactory.getSystemPrompt(style);
    return this.openaiClient.createChatCompletion(systemPrompt, request.prompt);
  }
}