import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
//import crypto from 'crypto';

export type ParticipantesDocument = Participantes & Document;

@Schema()
export class Participantes {
  @Prop({ required: true })
  nickname: string;

  @Prop({
    unique: true,
    required: true,
  })
  email: string;

  @Prop({
    required: true,
  })
  password: string;
}

export const ParticipantesSchema = SchemaFactory.createForClass(Participantes);
