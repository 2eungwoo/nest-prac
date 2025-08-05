import {ChatRequestDto} from "../dto/chat-request.dto";

export interface OpenAiChatUseCase {
  chat(request: ChatRequestDto): Promise<string>;
}