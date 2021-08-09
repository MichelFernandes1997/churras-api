import { Module } from '@nestjs/common';
import { ChurrasService } from './churras.service';
import { ChurrasController } from './churras.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Churras, ChurrasSchema } from './entities/churras.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Churras.name, schema: ChurrasSchema }]),
  ],
  controllers: [ChurrasController],
  providers: [ChurrasService],
  exports: [ChurrasService],
})
export class ChurrasModule {}
