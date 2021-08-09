import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateParticipanteDto } from './dto/create-participante.dto';
import { UpdateParticipanteDto } from './dto/update-participante.dto';
import {
  Participantes,
  ParticipantesDocument,
} from './entities/participante.entity';

@Injectable()
export class ParticipantesService {
  constructor(
    @InjectModel(Participantes.name)
    private participanteModel: Model<ParticipantesDocument>,
  ) {}

  async create(createParticipanteDto: CreateParticipanteDto) {
    const participante = new this.participanteModel(createParticipanteDto);

    return await participante.save();
  }

  async findAll() {
    return `This action returns all participantes`;
  }

  async findOne(id: string) {
    return `This action returns a #${id} participante`;
  }

  async update(id: string, updateParticipanteDto: UpdateParticipanteDto) {
    return `This action updates a #${id} participante`;
  }

  async remove(id: string) {
    return `This action removes a #${id} participante`;
  }

  async findByEmail(email: string) {
    return await this.participanteModel.findOne({ email }).exec();
  }
}
