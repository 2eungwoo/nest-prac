import { HttpStatus } from '@nestjs/common';
import {UserErrorCode, UserErrorCodeEnum} from "../dto/result/user-error.code.enum";
import {CustomException} from "../../../global/exception/custom.exception";

export class UserAlreadyExistsException extends CustomException {
  constructor() {
    super(
        UserErrorCode[UserErrorCodeEnum.USER_ALREADY_EXISTS],
        HttpStatus.CONFLICT
    );
  }
}