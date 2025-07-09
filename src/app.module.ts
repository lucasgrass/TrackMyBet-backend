import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { WalletsModule } from './wallets/wallets.module';
import { BetsModule } from './bets/bets.module';
import { TipstersModule } from './tipsters/tipsters.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/trackmybet'),
    UsersModule,
    WalletsModule,
    BetsModule,
    TipstersModule,
  ],
})
export class AppModule {}
