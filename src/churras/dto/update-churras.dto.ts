import { PartialType } from '@nestjs/mapped-types';
import { CreateChurrasDto } from './create-churras.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsDate, IsString } from 'class-validator';

export class UpdateChurrasDto extends PartialType(CreateChurrasDto) {
  @ApiProperty()
  @IsString()
  descricao: string;

  @ApiProperty()
  @IsString()
  observacoes: string;

  @ApiProperty()
  @IsDate()
  data: Date;

  @ApiProperty()
  @IsArray()
  participantes: [{ name: string; value: number; active: boolean }];
}
