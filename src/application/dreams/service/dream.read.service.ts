import {Injectable} from "@nestjs/common";
import {DreamRepository} from "../../../domain/dreams/repositories/dream.repository";
import {DreamReadUseCase} from "../usecase/dream.read.usercase";
import {DreamNotFoundException} from "../exceptions/dream.not-found";
import {DreamListResult} from "../dto/dream.list.result";
import {DreamDetailResult} from "../dto/dream.detail.result";

@Injectable()
export class DreamReadService implements DreamReadUseCase {
  constructor(
      private readonly dreamRepository: DreamRepository
  ) {
  }

  async getDreams(): Promise<DreamListResult[]> {
    const dreams = await this.dreamRepository.findAll();
    return dreams.map(DreamListResult.of);
  }

  async getDreamById(id: string): Promise<DreamDetailResult> {
    const dream = await this.dreamRepository.findById(id);
    if (!dream) {
      throw new DreamNotFoundException(id);
    }
    return DreamDetailResult.of(dream);
  }
}