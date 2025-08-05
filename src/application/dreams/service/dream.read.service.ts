import {Injectable} from "@nestjs/common";
import {DreamRepository} from "../../../domain/dreams/repositories/dream.repository";
import {DreamReadUseCase} from "../usecase/dream.read.usercase";
import {Dream} from "src/domain/dreams/entities/dream.entity";
import {DreamNotFoundException} from "../exceptions/dream.not-found";

@Injectable()
export class DreamReadService implements DreamReadUseCase {
  constructor(
      private readonly dreamRepository: DreamRepository
  ) {
  }

  async getDreams(): Promise<Dream[]> {
    return await this.dreamRepository.findAll();
  }

  async getDreamById(id: string): Promise<Dream> {
    const dream = await this.dreamRepository.findById(id);
    if (!dream) {
      throw new DreamNotFoundException(id);
    }
    return dream;
  }
}