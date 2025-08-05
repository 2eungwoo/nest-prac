import { HttpStatus } from '@nestjs/common';
import {UserErrorCode, UserErrorCodeEnum} from "../responses/user-error.code.enum";
import {CustomException} from "../../../common/responses/responess/exception/custom.exception";

export class UserAlreadyExistsException extends CustomException {
  constructor() {
    super(
        UserErrorCode[UserErrorCodeEnum.USER_ALREADY_EXISTS],
        HttpStatus.CONFLICT
    );
  }
}