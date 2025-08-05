import { HttpStatus } from '@nestjs/common';
import {BaseCode, BaseResponseCode} from "../../../common/responess/enum/base-response-code.enum";
import {CustomException} from "../../../common/responess/exception/custom.exception";
import {UserErrorCode, UserErrorCodeEnum} from "../responses/user-error.code.enum";

export class UserAlreadyExistsException extends CustomException {
  constructor() {
    super(
        UserErrorCode[UserErrorCodeEnum.USER_ALREADY_EXISTS],
        HttpStatus.CONFLICT
    );
  }
}