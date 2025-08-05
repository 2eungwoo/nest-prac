import {Injectable} from "@nestjs/common";
import {DreamRepository} from "../../../domain/dreams/repositories/dream.repository";
import {DreamReadUseCase} from "../usecase/dream.read.usercase";
import { Dream } from "src/domain/dreams/entities/dream.entity";

@Injectable()
export class DreamReadService implements DreamReadUseCase {
  constructor(
      private readonly dreamRepository: DreamRepository
  ) {
  }

  getDreams(): Promise<Dream[]> {
        throw new Error("Method not implemented.");
    }
    getDreamById(id: string): Promise<Dream> {
        throw new Error("Method not implemented.");
    }
}