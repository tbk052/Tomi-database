import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { DateEntity } from '../common/date.entity';
import { User } from './user.entity';

@Entity({ name: 'posts' })
export class Post extends DateEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne(() => User, (user) => user.posts)
  user: User;
}
