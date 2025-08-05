import {Injectable} from "@nestjs/common";
import {DreamRepository} from "../../../domain/dreams/repositories/dream.repository";
import {DreamSaveUseCase} from "../usecase/dream.save.usecase";

@Injectable()
export class DreamSaveService implements DreamSaveUseCase{
  constructor(
      private readonly dreamRepository: DreamRepository
  ) {
  }

  save(): Promise<void> {
        throw new Error("Method not implemented.");
    }
}