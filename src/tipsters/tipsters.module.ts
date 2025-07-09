import { Module } from '@nestjs/common';
import { TipstersController } from './tipsters.controller';
import { TipstersService } from './tipsters.service';

@Module({
  controllers: [TipstersController],
  providers: [TipstersService],
})
export class TipstersModule {}
