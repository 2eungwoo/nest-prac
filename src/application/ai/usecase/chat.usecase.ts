import {ChatRequestDto} from "../dto/chat-request.dto";

export interface ChatUsecase {
  chat(request: ChatRequestDto, userId: string): Promise<string>;
}