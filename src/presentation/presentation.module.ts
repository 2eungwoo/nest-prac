import { Module } from '@nestjs/common';
import {AiModule} from "../infrastructure/external/ai/ai.module";
import {UsersModule} from "../domain/users/users.module";


@Module({
  imports: [UsersModule, AiModule],
})
export class PresentationModule {}