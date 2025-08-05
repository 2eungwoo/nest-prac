import {Dream} from "../../../domain/dreams/entities/dream.entity";

export interface DreamReadUseCase {

  getDreams(): Promise<Dream[]>;

  getDreamById(id: string): Promise<Dream>;
}