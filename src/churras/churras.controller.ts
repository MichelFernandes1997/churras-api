import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { JwtAuthGuard } from './../authentication/guard/jwt-auth.guard';
import { ChurrasService } from './churras.service';
import { CreateChurrasDto } from './dto/create-churras.dto';
import { UpdateChurrasDto } from './dto/update-churras.dto';

@Controller('churras')
export class ChurrasController {
  constructor(private readonly churrasService: ChurrasService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body(new ValidationPipe()) createChurraDto: CreateChurrasDto) {
    return this.churrasService.create(createChurraDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.churrasService.findAll();
  }

  // @UseGuards(JwtAuthGuard)
  // @Get('withParticipantes')
  // findAllWithRelations() {
  //   return this.churrasService.findAllWithRelations();
  // }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.churrasService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body(new ValidationPipe()) updateChurraDto: UpdateChurrasDto,
  ) {
    return this.churrasService.update(id, updateChurraDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.churrasService.remove(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('addParticipantes/:id')
  addParticipantes(
    @Param('id') id: string,
    @Body() participantes: [{ name: string; value: number; active: boolean }],
  ) {
    return this.churrasService.addParticipantes(id, participantes);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('removeParticipantes/:id')
  removeParticipantes(
    @Param('id') id: string,
    @Body() participantes: [{ name: string; value: number; active: boolean }],
  ) {
    return this.churrasService.removeParticipantes(id, participantes);
  }

  // @UseGuards(JwtAuthGuard)
  // @Post('addParticipantes')
  // addParticipante(
  //   @Body()
  //   createChurraDto: {
  //     idParticipante: string;
  //     idChurras: string;
  //     contribuicao: number;
  //   },
  // ) {
  //   return this.churrasService.addParticipante(
  //     createChurraDto.idParticipante,
  //     createChurraDto.idChurras,
  //     createChurraDto.contribuicao,
  //   );
  // }
}
