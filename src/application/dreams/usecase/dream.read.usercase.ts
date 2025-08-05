import {DreamListResult} from "../dto/dream.list.result";
import {DreamDetailResult} from "../dto/dream.detail.result";

export interface DreamReadUseCase {

  getDreams(): Promise<DreamListResult[]>;

  getDreamById(id: string): Promise<DreamDetailResult>;
}