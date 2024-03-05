import { BaseEntity } from 'src/common/base.entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { AccountEntity } from './account.entity';

@Entity({ name: 'profiles' })
export class ProfileEntity extends BaseEntity {
  @Column()
  fullName: string;

  @Column()
  address: string;

  @OneToOne(() => AccountEntity, (account) => account.profile)
  @JoinColumn()
  account: AccountEntity;
}
