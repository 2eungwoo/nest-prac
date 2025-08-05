export interface DreamDeleteUseCase {
  delete(id: string): Promise<void> ;
}