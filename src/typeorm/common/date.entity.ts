import { CreateDateColumn } from 'typeorm';

export class DateEntity {
  @CreateDateColumn()
  createdAt: Date;
}
