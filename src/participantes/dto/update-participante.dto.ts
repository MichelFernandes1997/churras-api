import { PartialType } from '@nestjs/mapped-types';
import { CreateParticipanteDto } from './create-participante.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class UpdateParticipanteDto extends PartialType(CreateParticipanteDto) {
  @ApiProperty()
  @IsString()
  nickname: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  password: string;
}
