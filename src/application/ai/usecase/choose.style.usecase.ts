import {ChooseStyleRequest} from "../../../presentation/ai/dto/choose.style.request";


export interface ChooseStyleUsecase {
  chooseStyle(request: ChooseStyleRequest): Promise<string>;
}