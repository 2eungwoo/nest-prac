import { ResponseCode } from './response-code.interface';

export class ApiResponse<T> {
  readonly success: boolean;
  readonly code: string;
  readonly message: string;
  readonly statusCode: number;
  readonly data: T;

  private constructor(
    success: boolean,
    code: string,
    message: string,
    statusCode: number,
    data: T,
  ) {
    this.success = success;
    this.code = code;
    this.message = message;
    this.statusCode = statusCode;
    this.data = data;
  }

  static success<T>(
    code: ResponseCode,
    data: T,
    statusCode = 200,
  ): ApiResponse<T> {
    return new ApiResponse(true, code.code, code.message, statusCode, data);
  }

  static fail(code: ResponseCode, statusCode = 400): ApiResponse<null> {
    return new ApiResponse(false, code.code, code.message, statusCode, null);
  }
}
