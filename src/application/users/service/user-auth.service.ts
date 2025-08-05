// src/application/users/services/user-auth.service.ts
import {Injectable} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import {UserRepository} from "../../../domain/users/repositories/user.repository";
import {SignupUserRequest} from "../dto/signup-user.request";
import {LoginUserRequest} from "../dto/login-user.request";
import {SignupUserResult} from "../result/signup-user.result";
import {LoginUserResult} from "../result/login-user.result";
import {UserAuthValidator} from "../validation/user-auth.validator";


@Injectable()
export class UserAuthService {
  constructor(private readonly userRepository: UserRepository,
              private readonly validator: UserAuthValidator,) {
  }

  async signup(req: SignupUserRequest): Promise<SignupUserResult> {

    await this.validator.validateEmailNotExists(req.email);

    const hashed = await bcrypt.hash(req.password, 10);
    const saved = await this.userRepository.save({
      email: req.email,
      password: hashed,
      name: req.name,
    });

    return new SignupUserResult(saved.id, saved.email, saved.name);
  }

  async login(req: LoginUserRequest): Promise<LoginUserResult> {

    const user = await this.validator.validateCredentials(req.email, req.password);
    return new LoginUserResult(user.id, user.email, user.name);
  }
}