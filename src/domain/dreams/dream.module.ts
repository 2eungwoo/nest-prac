import {Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Dream} from "./entities/dream.entity";
import {DreamsController} from "../../presentation/dreams/dreams.controller";
import {DreamRepository} from "./repositories/dream.repository";
import {DreamSaveService} from "../../application/dreams/service/dream.save.service";
import {DreamDeleteService} from "../../application/dreams/service/dream.delete.service";
import {DreamReadService} from "../../application/dreams/service/dream.read.service";

@Module({
  imports: [TypeOrmModule.forFeature([Dream])],
  controllers: [DreamsController],
  providers: [
      DreamRepository,
      DreamDeleteService,
      DreamSaveService,
      DreamReadService,
    {
      provide: 'DreamSaveUseCase',
      useExisting: DreamSaveService,
    },
    {
      provide: 'DreamDeleteUseCase',
      useExisting: DreamDeleteService,
    },
    {
      provide: 'DreamReadUseCase',
      useExisting: DreamReadService,
    }

  ]

})
export class DreamModule {
}