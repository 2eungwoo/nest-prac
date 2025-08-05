import {Dream} from "../../../domain/dreams/entities/dream.entity";

export class DreamDetailResult {
  constructor(
      readonly id: string,
      readonly userId: string,
      readonly description: string,
      readonly interpretation: string,
      readonly createdAt: string,
      readonly updatedAt: string,
  ) {}

  static of(entity: Dream): DreamDetailResult {
    return new DreamDetailResult(
        entity.id,
        entity.userId,
        entity.description,
        entity.interpretation,
        entity.createdAt.toISOString(),
        entity.updatedAt.toISOString(),
    );
  }
}