import {ChooseStyleUsecase} from "../usecase/choose.style.usecase";
import {Injectable} from "@nestjs/common";
import {AIStyleType} from "../../../infrastructure/external/ai/utils/ai-style.enum";
import {AIStyleStore} from "../../../infrastructure/external/ai/utils/ai-style-store";
import {ChooseStyleRequest} from "../../../presentation/ai/dto/choose.style.request";

@Injectable()
export class ChooseStyleService implements ChooseStyleUsecase {
  async chooseStyle(request: ChooseStyleRequest): Promise<string> {
    AIStyleStore.setStyle(request.style);
    return AIStyleType[request.style];
  }
}