import { Test, TestingModule } from '@nestjs/testing';
import { ChurrasService } from './churras.service';

describe('ChurrasService', () => {
  let service: ChurrasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChurrasService],
    }).compile();

    service = module.get<ChurrasService>(ChurrasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
