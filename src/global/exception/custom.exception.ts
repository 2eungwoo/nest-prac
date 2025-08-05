import {HttpException} from '@nestjs/common';
import {ResponseCode} from "../interfaces/response-code.interface";

export class CustomException extends HttpException {
  constructor(responseCode: ResponseCode, status?: number);
  constructor(responseCode: ResponseCode, status: number, detail?: any);
  constructor(responseCode: ResponseCode, statusOrDetail?: number | any, maybeDetail?: any) {
    const isStatusNumber = typeof statusOrDetail === 'number';
    const status = isStatusNumber ? statusOrDetail : responseCode.status;
    const detail = isStatusNumber ? maybeDetail : statusOrDetail;

    super(
        {
          code: responseCode.code,
          message: responseCode.message,
          ...(detail && { detail }), // detail이 있을 경우 포함
        },
        status,
    );
  }
}