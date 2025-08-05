import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {UsersController} from '../../presentation/users/users.controller';
import {User} from './entities/user.entity';
import {UserRepository} from './repositories/user.repository';
import {UserReadService} from "../../application/users/service/user.read.service";
import {UserAuthService} from "../../application/users/service/user-auth.service";
import {UserAuthValidator} from "../../application/users/validation/user-auth.validator";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [
    UserRepository,
    UserReadService,
    UserAuthService,
    UserAuthValidator,
    {
      provide: 'UserReadUseCase',
      useExisting: UserReadService,
    },
  ],
  exports: ['UserReadUseCase',UserAuthService],
})

export class UsersModule {}