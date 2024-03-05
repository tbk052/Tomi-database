import { BaseEntity } from 'src/common/base.entity';
import { Column, Entity, OneToOne } from 'typeorm';
import { ProfileEntity } from './profile.entity';

@Entity({ name: 'accounts' })
export class AccountEntity extends BaseEntity {
  @Column()
  phone: string;

  @Column()
  password: string;

  @Column()
  otp: string;

  @OneToOne(() => ProfileEntity, (profile) => profile.account)
  profile: ProfileEntity;
}
