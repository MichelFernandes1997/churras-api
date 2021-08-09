import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { ParticipantesService } from './participantes.service';
import { CreateParticipanteDto } from './dto/create-participante.dto';

@Controller('participantes')
export class ParticipantesController {
  constructor(private readonly participantesService: ParticipantesService) {}

  @Post()
  create(
    @Body(new ValidationPipe()) createParticipanteDto: CreateParticipanteDto,
  ) {
    return this.participantesService.create(createParticipanteDto);
  }
}
