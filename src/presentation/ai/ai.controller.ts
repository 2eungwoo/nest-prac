import {Body, Controller, Inject, Post} from "@nestjs/common";
import type {OpenAiChatUseCase} from "../../application/ai/usecase/openai-chat.usecase";
import type {
  ChooseStyleUseCase
} from "../../application/ai/usecase/choose-style.usecase";
import {ChooseStyleRequest} from "./dto/choose.style.request";
import {ApiResponse} from "../../common/responses/responess/api-response";
import {AIResponseCode, AIResponseCodeEnum} from "../../infrastructure/external/ai/responses/ai-response-code.enum";
import {AIChatRequest} from "./dto/ai-chat.request";

@Controller('ai')
export class AiController {
  constructor(
      @Inject('OpenAiChatUseCase')
      private readonly aiChatUseCase: OpenAiChatUseCase,
      @Inject('ChooseStyleUseCase')
      private readonly chooseStyleUseCase: ChooseStyleUseCase,) {
  }

  @Post('style')
  async setStyle(@Body() request: ChooseStyleRequest) {
    const result = await this.chooseStyleUseCase.chooseStyle(request);
    return ApiResponse.success(AIResponseCode[AIResponseCodeEnum.AI_CHOOSE_STYLE_SUCCESS], {
      response: result,
    });
  }

  @Post('chat')
  async chat(@Body() request: AIChatRequest) {
    const result = await this.aiChatUseCase.chat(request);
    return ApiResponse.success(AIResponseCode[AIResponseCodeEnum.AI_CHAT_SUCCESS], {
      response: result,
    });
  }
}