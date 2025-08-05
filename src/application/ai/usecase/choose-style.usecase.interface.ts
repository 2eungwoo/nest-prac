import {ChooseStyleRequest} from "../../../presentation/dto/choose.style.request";

export interface ChooseStyleUseCase {
  chooseStyle(request: ChooseStyleRequest): Promise<string>;
}