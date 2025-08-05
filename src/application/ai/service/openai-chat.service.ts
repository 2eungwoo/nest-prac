import {Injectable} from '@nestjs/common';
import {OpenaiClient} from '../../../infrastructure/external/ai/openai.client';
import {OpenAiChatUseCase} from "../usecase/openai-chat.usecase.interface";
import {ChatRequestDto} from "../dto/chat-request.dto";

@Injectable()
export class OpenAiChatService implements OpenAiChatUseCase{
  constructor(private readonly openaiClient: OpenaiClient) {
  }

  async chat(request: ChatRequestDto): Promise<string> {
    return this.openaiClient.createChatCompletion(request.prompt);
  }
}