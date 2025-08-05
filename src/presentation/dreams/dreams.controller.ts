import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ApiResponse } from '../../global/responses/api-response';
import { DreamReadUseCase } from '../../application/dream/usecase/dream-read.usecase';
import { DreamSaveUseCase } from '../../application/dream/usecase/dream-save.usecase';
import { DreamDeleteUseCase } from '../../application/dream/usecase/dream-delete.usecase';
import { DreamList } from './dto/response/dream.list';
import { DreamDetail } from './dto/response/dream.detail';
import {
  DreamResponseCode,
  DreamResponseCodeEnum,
} from '../../infrastructure/external/ai/responses/ai-response-code.enum';

@Controller('dreams')
export class DreamsController {
  constructor(
      @Inject()
      private readonly dreamReadUseCase: DreamReadUseCase,
      @Inject()
      private readonly dreamSaveUseCase: DreamSaveUseCase,
      @Inject()
      private readonly dreamDeleteUseCase: DreamDeleteUseCase,
  ) {}

  @Get()
  async getDreams() {
    const dreams = await this.dreamReadUseCase.getDreams();
    const response = dreams.map(DreamList.of);

    return ApiResponse.success(
        DreamResponseCode[DreamResponseCodeEnum.DREAM_GET_SUCCESS],
        response,
    );
  }

  @Get(':dreamId')
  async getDreamById(@Param('dreamId') dreamId: string) {
    const dream = await this.dreamReadUseCase.getDreamById(dreamId);
    const response = DreamDetail.of(dream);

    return ApiResponse.success(
        DreamResponseCode[DreamResponseCodeEnum.DREAM_GET_SUCCESS],
        response,
    );
  }
}