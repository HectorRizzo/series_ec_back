import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CapitulosService } from './capitulos.service';

@Controller('capitulos')
export class CapitulosController {
  constructor(private readonly capitulosService: CapitulosService) {}

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.capitulosService.findOne(id);
  }
}
