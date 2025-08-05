export class DreamDetail {
  constructor(
      public readonly id: string,
      public readonly title: string,
      public readonly description: string,
      public readonly createdAt: string,
      public readonly tags: string[],
  ) {}

  static of(entity: any): DreamDetail {
    return new DreamDetail(
        entity.id,
        entity.title,
        entity.description,
        entity.createdAt.toISOString(),
        entity.tags,
    );
  }
}