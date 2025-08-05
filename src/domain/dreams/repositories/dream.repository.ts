import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Injectable} from "@nestjs/common";
import {Dream} from "../entities/dream.entity";

@Injectable()
export class DreamRepository {
  constructor(
      @InjectRepository(Dream)
      private readonly repo: Repository<Dream>,
  ) {
  }

  async findAll(): Promise<Dream[]> {
    return this.repo.find();
  }

  async findById(id: string): Promise<Dream | null> {
    return this.repo.findOne({where: {id}});
  }

  async save(dream: Partial<Dream>): Promise<Dream> {
    return this.repo.save(dream);
  }

  async delete(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}