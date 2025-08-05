// src/application/users/services/user-auth.service.ts
import { Injectable, HttpStatus } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import {UserRepository} from "../../../domain/users/repositories/user.repository";
import {SignupUserRequest} from "../dto/signup-user.request";
import {LoginUserRequest} from "../dto/login-user.request";
import {SignupUserResult} from "../result/signup-user.result";
import {LoginUserResult} from "../result/login-user.result";
import {BaseCode, BaseResponseCode} from "../../../common/responess/base-response-code.enum";


@Injectable()
export class UserAuthService {
  constructor(private readonly userRepository: UserRepository) {}

  async signup(req: SignupUserRequest): Promise<SignupUserResult> {
    const exists = await this.userRepository.findByEmail(req.email);
    if (exists) {
      throw new CustomException(
          { code: 'USER_EXISTS', message: '이미 존재하는 이메일입니다.' },
          HttpStatus.CONFLICT,
      );
    }

    const hashed = await bcrypt.hash(req.password, 10);
    const saved = await this.userRepository.save({
      email: req.email,
      password: hashed,
      name: req.name,
    });

    return new SignupUserResult(saved.id, saved.email, saved.name);
  }

  async login(req: LoginUserRequest): Promise<LoginUserResult> {
    const user = await this.userRepository.findByEmail(req.email);
    if (!user) {
      throw new CustomException(BaseResponseCode[BaseCode.UNAUTHORIZED], HttpStatus.UNAUTHORIZED);
    }

    const match = await bcrypt.compare(req.password, user.password);
    if (!match) {
      throw new CustomException(BaseResponseCode[BaseCode.UNAUTHORIZED], HttpStatus.UNAUTHORIZED);
    }

    return new LoginUserResult(user.id, user.email, user.name);
  }
}