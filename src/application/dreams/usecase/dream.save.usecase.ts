import {AIResult} from "../../ai/dto/ai.result";

export interface DreamSaveUseCase {
  save(aiResult: AIResult): Promise<void>;
}