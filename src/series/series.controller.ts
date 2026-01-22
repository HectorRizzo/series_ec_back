import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { SeriesService } from './series.service';

@Controller('series')
export class SeriesController {
  constructor(private readonly seriesService: SeriesService) {}

  @Get()
  findAll() {
    return this.seriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.seriesService.findOne(id);
  }

  @Get(':id/temporadas')
  findTemporadas(@Param('id', ParseIntPipe) id: number) {
    return this.seriesService.findTemporadas(id);
  }
}
