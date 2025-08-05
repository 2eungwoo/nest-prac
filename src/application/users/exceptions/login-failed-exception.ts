import {HttpStatus} from '@nestjs/common';
import {UserErrorCode, UserErrorCodeEnum} from "../dto/result/user-error.code.enum";
import {CustomException} from "../../../global/exception/custom.exception";

export class LoginFailedException extends CustomException {
  constructor() {
    super(UserErrorCode[UserErrorCodeEnum.INVALID_CREDENTIALS], HttpStatus.BAD_REQUEST);
  }
}