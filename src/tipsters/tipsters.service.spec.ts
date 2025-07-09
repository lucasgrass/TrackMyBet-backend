import { Test, TestingModule } from '@nestjs/testing';
import { TipstersService } from './tipsters.service';

describe('TipstersService', () => {
  let service: TipstersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipstersService],
    }).compile();

    service = module.get<TipstersService>(TipstersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
