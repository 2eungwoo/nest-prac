import {Body, Controller, Inject, Post} from "@nestjs/common";
import type {OpenAiChatUseCase} from "../../application/ai/usecase/openai-chat.usecase.interface";
import {ApiResponse} from "../../common/responess/api-response";
import {AIChatRequest} from "../dto/ai-chat.request";
import {AIResponseCode, AIResponseCodeEnum} from "../../domain/ai/ai-response-code.enum";

@Controller('ai')
export class AiController {
  constructor(
      @Inject('OpenAiChatUseCase')
      private readonly aiChatUseCase: OpenAiChatUseCase)
  {}

  @Post('chat')
  async chat(@Body() request: AIChatRequest) {
    const result = await this.aiChatUseCase.chat(request);
    return ApiResponse.success(AIResponseCode[AIResponseCodeEnum.AI_CHAT_SUCCESS], {
      response: result,
    });
  }
}