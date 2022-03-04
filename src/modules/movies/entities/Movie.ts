import {
  Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Category } from '../../categories/entities/Category';

@Entity('movies')
export class Movie {
  constructor() {
    if (!this.id) this.id = uuid();
  }

  @PrimaryColumn()
    id: string;

  @Column()
    name: string;

  @Column()
    duration: number;

  @Column()
    category_id: string;

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'category_id' })
    category: Category;

  @Column()
    description: string;

  @CreateDateColumn()
    created_at: Date;
}
