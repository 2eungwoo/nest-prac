import {Injectable} from "@nestjs/common";
import {DreamRepository} from "../../../domain/dreams/repositories/dream.repository";
import {DreamDeleteUseCase} from "../usecase/dream.delete.usecase";

@Injectable()
export class DreamDeleteService implements DreamDeleteUseCase {
  constructor(
      private readonly dreamRepository: DreamRepository
  ) {
  }

  async delelte(id: string): Promise<void> {
    await this.dreamRepository.delete(id);
  }
}