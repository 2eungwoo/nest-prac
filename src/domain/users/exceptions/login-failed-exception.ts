import {HttpStatus} from '@nestjs/common';
import {UserErrorCode, UserErrorCodeEnum} from "../responses/user-error.code.enum";
import {CustomException} from "../../../common/responses/exception/custom.exception";

export class LoginFailedException extends CustomException {
  constructor() {
    super(UserErrorCode[UserErrorCodeEnum.INVALID_CREDENTIALS], HttpStatus.BAD_REQUEST);
  }
}