import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { ErrorResponse } from '../error-response';
import { BaseResponseCode, BaseCode } from '../enum/base-response-code.enum';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let code = BaseResponseCode[BaseCode.INTERNAL_ERROR];
    let errors = undefined;

    console.error('[Exception]', exception);

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const res = exception.getResponse();

      if (typeof res === 'object' && res['message']) {
        errors = res['message'];
      }

      code =
        status === HttpStatus.BAD_REQUEST
          ? BaseResponseCode[BaseCode.BAD_REQUEST]
          : status === HttpStatus.UNAUTHORIZED
            ? BaseResponseCode[BaseCode.UNAUTHORIZED]
            : status === HttpStatus.FORBIDDEN
              ? BaseResponseCode[BaseCode.FORBIDDEN]
              : code;
    }

    response.status(status).json(new ErrorResponse(code, status, errors));
  }
}
