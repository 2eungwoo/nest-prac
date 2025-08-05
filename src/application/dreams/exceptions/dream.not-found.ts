import {CustomException} from "../../../global/exception/custom.exception";
import {DreamErrorCode, DreamErrorCodeEnum} from "./dream.error.code";

export class DreamNotFoundException extends CustomException {
  constructor(dreamId: string) {
    const error = DreamErrorCode[DreamErrorCodeEnum.DREAM_NOT_FOUND];
    const detail = {dreamId};
    super(error, error.status, detail);
  }
}