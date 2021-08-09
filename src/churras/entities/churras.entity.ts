import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ChurrasDocument = Churras & Document;

@Schema({ timestamps: true })
export class Churras {
  @Prop()
  descricao: string;

  @Prop()
  observacoes: string;

  @Prop({ required: true })
  data: Date;

  @Prop()
  participantes: [{ name: string; value: number; active: boolean }];
}

export const ChurrasSchema = SchemaFactory.createForClass(Churras);
