import {Injectable} from '@nestjs/common';
import {OpenaiClient} from '../../../infrastructure/external/ai/utils/openai.client';
import {ChatUsecase} from "../usecase/chat.usecase";
import {ChatRequestDto} from "../dto/chat-request.dto";
import {AIStyleStore} from "../../../infrastructure/external/ai/utils/ai-style-store";
import {AIStyleFactory} from "../../../infrastructure/external/ai/utils/ai-style.factory";

@Injectable()
export class ChatService implements ChatUsecase {
  constructor(private readonly openaiClient: OpenaiClient) {
  }

  async chat(request: ChatRequestDto): Promise<string> {
    const style = AIStyleStore.getStyle();
    const systemPrompt = AIStyleFactory.getSystemPrompt(style);
    return this.openaiClient.createChatCompletion(systemPrompt, request.prompt);
  }
}