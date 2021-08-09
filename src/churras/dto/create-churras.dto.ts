import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsDate, IsNotEmpty, IsString } from 'class-validator';

export class CreateChurrasDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  descricao: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  observacoes: string;

  @ApiProperty()
  @IsNotEmpty()
  data: Date;

  @ApiProperty()
  @IsArray()
  participantes: [{ name: string; value: number; active: boolean }];
}
