export class DreamList {
  constructor(
      public readonly id: string,
      public readonly title: string,
      public readonly createdAt: string,
  ) {}

  static of(entity: any): DreamList {
    return new DreamList(
        entity.id,
        entity.title,
        entity.createdAt.toISOString(),
    );
  }
}