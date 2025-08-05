import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity('dreams')
export class Dream {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ nullable: false })
  userId: string;

  @Column({ name: 'dream_description', type: 'text'})
  description: string;

  @Column({ name: 'dream_interpretation', type: 'text'})
  interpretation: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}