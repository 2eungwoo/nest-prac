import {Dream} from "../../../domain/dreams/entities/dream.entity";

export class DreamListResult {
  constructor(
      readonly id: string,
      readonly description: string,
      readonly createdAt: string,
  ) {}

  static of(entity: Dream): DreamListResult {
    return new DreamListResult(
        entity.id,
        entity.description,
        entity.createdAt.toISOString(),
    );
  }
}