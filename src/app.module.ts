import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountEntity } from './auth/account.entity';
import { ProfileEntity } from './auth/profile.entity';

@Module({
  imports: [
    AuthModule,
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'admin',
      password: '12345678',
      database: 'tomi_database',
      entities: [AccountEntity, ProfileEntity],
      synchronize: true,
      logging: true,
    }),
  ],
})
export class AppModule {}
