import {Body, Controller, Inject, Post, Req} from "@nestjs/common";
import type {ChatUsecase} from "../../application/ai/usecase/chat.usecase";
import type {ChooseStyleUsecase} from "../../application/ai/usecase/choose.style.usecase";
import {ChooseStyleRequest} from "./dto/choose.style.request";
import {ApiResponse} from "../../global/responses/api-response";
import {
  AIResponseCode,
  AIResponseCodeEnum
} from "../../infrastructure/external/ai/responses/ai-response-code.enum";
import {AIChatRequest} from "./dto/ai-chat.request";

@Controller('ai')
export class AiController {
  constructor(
      @Inject('ChatUsecase')
      private readonly aiChatUseCase: ChatUsecase,
      @Inject('ChooseStyleUsecase')
      private readonly chooseStyleUseCase: ChooseStyleUsecase,) {
  }

  @Post('style')
  async setStyle(@Body() request: ChooseStyleRequest) {
    const result = await this.chooseStyleUseCase.chooseStyle(request);
    return ApiResponse.success(AIResponseCode[AIResponseCodeEnum.AI_CHOOSE_STYLE_SUCCESS], {
      response: result,
    });
  }

  @Post('chat')
  async chat(@Body() request: AIChatRequest, @Req() req: Request) {
    const userId = (req as any).user?.id;
    const result = await this.aiChatUseCase.chat(request, '1');
    return ApiResponse.success(AIResponseCode[AIResponseCodeEnum.AI_CHAT_SUCCESS], {
      response: result,
    });
  }
}