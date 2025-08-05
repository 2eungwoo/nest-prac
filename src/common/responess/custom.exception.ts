import { HttpException } from '@nestjs/common';
import { ResponseCode } from './response-code.interface';

export class CustomException extends HttpException {
  constructor(responseCode: ResponseCode, status: number) {
    super(
        {
          code: responseCode.code,
          message: responseCode.message,
        },
        status,
    );
  }
}