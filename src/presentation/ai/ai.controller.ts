import {Body, Controller, Post} from "@nestjs/common";
import {OpenAiChatService} from "../../application/ai/service/openai-chat.service";

@Controller('ai')
export class AiController {
  constructor(private readonly aiChatService: OpenAiChatService) {}

  @Post('chat')
  async chat(@Body('prompt') prompt: string) {
    const result = await this.aiChatService.chat(prompt);
    return { response: result };
  }
}