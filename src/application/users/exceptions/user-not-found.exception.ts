import {CustomException} from "../../../global/exception/custom.exception";
import {UserErrorCode, UserErrorCodeEnum} from "../dto/result/user-error.code.enum";
import {HttpStatus} from "@nestjs/common";

export class UserNotFoundException extends CustomException {
  constructor() {
    super(UserErrorCode[UserErrorCodeEnum.USER_NOT_FOUND], HttpStatus.NOT_FOUND);
  }
}