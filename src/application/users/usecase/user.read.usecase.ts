import {User} from "../../../domain/users/entities/user.entity";

export interface UserReadUseCase {
  findById(id: string): Promise<User>;
}