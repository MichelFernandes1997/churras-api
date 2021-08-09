import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// import {
//   ParticipantesChurras,
//   ParticipantesChurrasDocument,
// } from 'src/participantes_churras/participantes_churras.entity';
import { CreateChurrasDto } from './dto/create-churras.dto';
import { UpdateChurrasDto } from './dto/update-churras.dto';
import { Churras, ChurrasDocument } from './entities/churras.entity';

@Injectable()
export class ChurrasService {
  constructor(
    @InjectModel(Churras.name)
    private churrasModel: Model<ChurrasDocument>, // @InjectModel(ParticipantesChurras.name) // private participante_churrasModel: Model<ParticipantesChurrasDocument>,
  ) {}

  async create(createChurrasDto: CreateChurrasDto) {
    const churras = new this.churrasModel(createChurrasDto);

    return await churras.save();
  }

  async findAll() {
    return await this.churrasModel.find();
  }

  // async findAllWithRelations() {
  //   return await this.participante_churrasModel
  //     .find()
  //     .populate(['participante', 'churras']);
  // }

  async findOne(id: string) {
    return await this.churrasModel.findOne({ _id: id });
  }

  async update(id: string, updateChurrasDto: UpdateChurrasDto) {
    return await this.churrasModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateChurrasDto,
      },
      {
        new: false,
      },
    );
  }

  async remove(id: string) {
    return await this.churrasModel.deleteOne({ _id: id });
  }

  async addParticipantes(
    id: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    participantes: [{ name: string; value: number; active: boolean }],
  ) {
    const churras = await this.churrasModel.findById(id);

    const toAdd = [] as unknown as [
      { name: string; value: number; active: boolean },
    ];

    for (const participante of participantes) {
      const foundedParticipante = churras.participantes.filter(
        (item) => item?.name.toUpperCase() === participante.name.toUpperCase(),
      );

      if (!foundedParticipante[0]) {
        toAdd.push(participante);
      } else {
        churras.participantes.map((item) => {
          if (item?.name.toUpperCase() === participante.name.toUpperCase()) {
            item.active = participante.active;

            toAdd.push(item);
          }
        });
      }
    }

    if (toAdd[0]) {
      await this.churrasModel.findByIdAndUpdate(id, {
        participantes: toAdd,
      });
    }

    return await this.churrasModel.findById(id);
  }

  async removeParticipantes(
    id: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    participantes: [{ name: string; value: number; active: boolean }],
  ) {
    const churras = await this.churrasModel.findById(id);

    const toRemove = [] as unknown as [
      { name: string; value: number; active: boolean },
    ];

    for (const participante of participantes) {
      churras.participantes.map((item) => {
        if (
          item.name === participante.name &&
          item.active !== participante.active &&
          item.active !== false
        ) {
          item.active = participante.active;

          toRemove.push(item);
        }
      });
    }

    if (toRemove[0]) {
      await this.churrasModel.findByIdAndUpdate(id, {
        participantes: [...new Set([...churras.participantes, ...toRemove])],
      });
    }

    return await this.churrasModel.findById(id);
  }

  // async addParticipante(
  //   idParticipante: string,
  //   idChurras: string,
  //   contribuicao: number,
  // ) {
  //   const particante_churras = new this.participante_churrasModel();

  //   particante_churras.contribuicao = contribuicao;

  //   particante_churras.participante = Types.ObjectId(idParticipante);

  //   particante_churras.churras = Types.ObjectId(idChurras);

  //   const added = await particante_churras.save();

  //   return added;
  // }
}
