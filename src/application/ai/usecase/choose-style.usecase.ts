import {ChooseStyleRequest} from "../../../presentation/ai/dto/choose.style.request";


export interface ChooseStyleUseCase {
  chooseStyle(request: ChooseStyleRequest): Promise<string>;
}