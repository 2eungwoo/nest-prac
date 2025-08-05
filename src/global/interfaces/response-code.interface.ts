import {HttpStatus} from "@nestjs/common";

export interface ResponseCode {
  readonly status: HttpStatus;
  readonly code: string;
  readonly message: string;
}
