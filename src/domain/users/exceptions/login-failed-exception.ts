import {CustomException} from "../../../common/responess/custom.exception";
import {HttpStatus} from '@nestjs/common';
import {UserErrorCode, UserErrorCodeEnum} from "../responses/user-error.code.enum";

export class LoginFailedException extends CustomException {
  constructor() {
    super(UserErrorCode[UserErrorCodeEnum.INVALID_CREDENTIALS], HttpStatus.BAD_REQUEST);
  }
}