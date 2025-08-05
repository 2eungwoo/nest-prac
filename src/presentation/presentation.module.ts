import { Module } from '@nestjs/common';
import {AiModule} from "../infrastructure/external/ai/ai.module";
import {UsersModule} from "../domain/users/users.module";
import {DreamModule} from "../domain/dreams/dream.module";


@Module({
  imports: [UsersModule, AiModule, DreamModule],
})
export class PresentationModule {}