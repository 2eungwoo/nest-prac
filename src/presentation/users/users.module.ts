import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { User } from '../../domain/users/entities/user.entity';
import { UserRepository } from '../../domain/users/repositories/user.repository';
import {UserAuthService} from "../../application/users/service/user-auth.service";
import {UserAuthValidator} from "../../application/users/validation/user-auth.validator";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UserRepository, UserAuthService, UserAuthValidator],
})
export class UsersModule {}