import { Module } from '@nestjs/common';
import { BetsController } from './bets.controller';
import { BetsService } from './bets.service';
import { WalletsModule } from 'src/wallets/wallets.module';

@Module({
  imports: [WalletsModule],
  controllers: [BetsController],
  providers: [BetsService],
})
export class BetsModule {}
