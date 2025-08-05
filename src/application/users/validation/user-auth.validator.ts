import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../../domain/users/repositories/user.repository';
import { UserAlreadyExistsException } from '../../../domain/users/exceptions/user-already-exists-exception';
import { LoginFailedException } from '../../../domain/users/exceptions/login-failed-exception';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserAuthValidator {
  constructor(private readonly userRepository: UserRepository) {}

  async validateEmailNotExists(email: string): Promise<void> {
    const exists = await this.userRepository.findByEmail(email);
    if (exists) {
      throw new UserAlreadyExistsException();
    }
  }

  async validateCredentials(email: string, password: string) {
    const user = await this.userRepository.findByEmail(email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new LoginFailedException();
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      throw new LoginFailedException();
    }

    return user;
  }
}