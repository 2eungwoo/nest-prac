import {CanActivate, ExecutionContext, Injectable, UnauthorizedException} from '@nestjs/common';
import {Request} from 'express';
import {UserReadService} from "../../application/users/service/user.read.service";
import {UserNotFoundException} from "../../application/users/exceptions/user-not-found.exception";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly userService: UserReadService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();

    const authHeader = request.headers['authorization'];
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UserNotFoundException();
    }

    const token = authHeader.replace('Bearer ', '').trim();

    const user = await this.userService.findById(token);
    if (!user) throw new UserNotFoundException();

    (request as any).user = user;

    return true;
  }
}