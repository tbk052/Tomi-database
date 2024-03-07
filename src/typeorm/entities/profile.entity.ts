import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { DateEntity } from '../common/date.entity';
import { User } from './user.entity';

@Entity({ name: 'profile' })
export class Profile extends DateEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  fullname: string;

  @Column()
  age: number;

  @Column()
  avatar: string;

  @OneToOne(() => User, (user) => user.profile)
  user: User;
}
