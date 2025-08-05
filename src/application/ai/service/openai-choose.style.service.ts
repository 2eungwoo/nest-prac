import {ChooseStyleUseCase} from "../usecase/choose-style.usecase.interface";
import {Injectable} from "@nestjs/common";
import {ChooseStyleRequest} from "../../../presentation/dto/choose.style.request";
import {AIStyleType} from "../../../domain/ai/ai-style.enum";
import {AIStyleStore} from "../../../domain/ai/ai-style-store";

@Injectable()
export class OpenAIChooseStyleService implements ChooseStyleUseCase {
  async chooseStyle(request: ChooseStyleRequest): Promise<string> {
    AIStyleStore.setStyle(request.style);
    return AIStyleType[request.style];
  }
}