import {ResponseCode} from "../interfaces/response-code.interface";


export class ErrorResponse {
  readonly success: false;
  readonly code: string;
  readonly message: string;
  readonly statusCode: number;
  readonly errors?: any;

  constructor(code: ResponseCode, statusCode: number, errors?: any) {
    this.success = false;
    this.code = code.code;
    this.message = code.message;
    this.statusCode = statusCode;
    this.errors = errors;
  }
}
