import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../../domain/users/repositories/user.repository';
import { User } from '../../../domain/users/entities/user.entity';
import {UserReadUseCase} from "../usecase/user.read.usecase";
import {UserNotFoundException} from "../exceptions/user-not-found.exception";

@Injectable()
export class UserReadService implements UserReadUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async findById(id: string): Promise<User> {
    const user = await this.userRepository.findById(id);
    if(!user) throw new UserNotFoundException();
    return user;
  }
}