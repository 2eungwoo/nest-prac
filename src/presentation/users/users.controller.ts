import {Body, Controller, Post} from '@nestjs/common';
import {LoginUserRequest} from '../../application/users/dto/login-user.request';
import {SignupUserRequest} from "../../application/users/dto/signup-user.request";
import {LoginUserResult} from "../../application/users/result/login-user.result";
import {SignupUserResult} from "../../application/users/result/signup-user.result";
import {UserAuthService} from "../../application/users/service/user-auth.service";
import {ApiResponse} from "../../common/responess/api-response";
import {BaseCode, BaseResponseCode} from "../../common/responess/base-response-code.enum";

@Controller('users')
export class UsersController {
  constructor(private readonly userAuthService: UserAuthService) {
  }

  @Post('signup')
  async signup(@Body() request: SignupUserRequest): Promise<ApiResponse<SignupUserResult>> {
    const result = await this.userAuthService.signup(request);
    return ApiResponse.success(BaseResponseCode[BaseCode.OK], result);
  }

  @Post('login')
  async login(@Body() request: LoginUserRequest): Promise<ApiResponse<LoginUserResult>> {
    const result = await this.userAuthService.login(request);
    return ApiResponse.success(BaseResponseCode[BaseCode.OK], result);
  }
}