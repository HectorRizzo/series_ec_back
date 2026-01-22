import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { TemporadasService } from './temporadas.service';

@Controller('temporadas')
export class TemporadasController {
  constructor(private readonly temporadasService: TemporadasService) {}

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.temporadasService.findOne(id);
  }

  @Get(':id/capitulos')
  findCapitulos(@Param('id', ParseIntPipe) id: number) {
    return this.temporadasService.findCapitulos(id);
  }
}
