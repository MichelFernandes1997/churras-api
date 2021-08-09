import { Module } from '@nestjs/common';
import { ParticipantesService } from './participantes.service';
import { ParticipantesController } from './participantes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Participantes,
  ParticipantesSchema,
} from './entities/participante.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Participantes.name, schema: ParticipantesSchema },
    ]),
  ],
  controllers: [ParticipantesController],
  providers: [ParticipantesService],
  exports: [ParticipantesService],
})
export class ParticipantesModule {}
