import {Controller, Get, Inject, Param, Post} from '@nestjs/common';
import { ApiResponse } from '../../global/responses/api-response';
import { DreamList } from './dto/response/dream.list';
import { DreamDetail } from './dto/response/dream.detail';
import type {DreamDeleteUseCase} from "../../application/dreams/usecase/dream.delete.usecase";
import type {DreamReadUseCase} from "../../application/dreams/usecase/dream.read.usercase";
import type {DreamSaveUseCase} from "../../application/dreams/usecase/dream.save.usecase";
import {DreamResponse, DreamResponseEnum} from "./dto/enums/dreams.response.enum";

@Controller('dreams')
export class DreamsController {
  constructor(
      @Inject('DreamReadUseCase')
      private readonly dreamReadUseCase: DreamReadUseCase,
      @Inject('DreamSaveUseCase')
      private readonly dreamSaveUseCase: DreamSaveUseCase,
      @Inject('DreamDeleteUseCase')
      private readonly dreamDeleteUseCase: DreamDeleteUseCase,
  ) {}

  @Get()
  async getDreams() {
    const dreams = await this.dreamReadUseCase.getDreams();
    const response = dreams.map(DreamList.of);

    return ApiResponse.success(
        DreamResponse[DreamResponseEnum.DREAM_ALL_GET_SUCCESS],
        response,
    );
  }

  @Get(':dreamId')
  async getDreamById(@Param('dreamId') dreamId: string) {
    const dream = await this.dreamReadUseCase.getDreamById(dreamId);
    const response = DreamDetail.of(dream);

    return ApiResponse.success(
        DreamResponse[DreamResponseEnum.DREAM_GET_SUCCESS],
        response,
    );
  }
}