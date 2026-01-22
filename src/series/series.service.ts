import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SeriesService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.series.findMany();
  }

  async findOne(id: number) {
    const serie = await this.prisma.series.findUnique({
      where: { id },
    });

    if (!serie) {
      throw new NotFoundException('Serie not found');
    }

    return serie;
  }

  async findTemporadas(id: number) {
    const serie = await this.prisma.series.findUnique({
      where: { id },
      include: { temporadas: true },
    });

    if (!serie) {
      throw new NotFoundException('Serie not found');
    }

    return serie.temporadas;
  }
}
