import {Injectable} from "@nestjs/common";
import {DreamRepository} from "../../../domain/dreams/repositories/dream.repository";
import {DreamSaveUseCase} from "../usecase/dream.save.usecase";
import {AIResult} from "../../ai/dto/ai.result";

@Injectable()
export class DreamSaveService implements DreamSaveUseCase{
  constructor(
      private readonly dreamRepository: DreamRepository
  ) {
  }

  // async save(aiResult: AIResult): Promise<void> {
  //   await this.dreamRepository.save({
  //     userId: aiResult.userId,
  //     description: aiResult.description,
  //     style: aiResult.style,
  //     interpretation: aiResult.interpretation,
  //   });
  // }
  async save(prompt: string, userId: string): Promise<void> {
    await this.dreamRepository.save({
      userId,
      description: prompt
    });
  }
}