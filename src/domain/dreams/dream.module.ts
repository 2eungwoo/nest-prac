import {Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Dream} from "./entities/dream.entity";
import {DreamsController} from "../../presentation/dreams/dreams.controller";
import {DreamRepository} from "./repositories/dream.repository";

@Module({
  imports: [TypeOrmModule.forFeature([Dream])],
  controllers: [DreamsController],
  providers: [DreamRepository]

})
export class DreamModule {
}