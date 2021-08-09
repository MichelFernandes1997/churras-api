import { Test, TestingModule } from '@nestjs/testing';
import { ChurrasController } from './churras.controller';
import { ChurrasService } from './churras.service';

describe('ChurrasController', () => {
  let controller: ChurrasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChurrasController],
      providers: [ChurrasService],
    }).compile();

    controller = module.get<ChurrasController>(ChurrasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
