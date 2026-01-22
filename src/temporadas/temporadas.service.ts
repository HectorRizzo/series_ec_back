import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TemporadasService {
  constructor(private readonly prisma: PrismaService) {}

  async findOne(id: number) {
    const temporada = await this.prisma.temporadas.findUnique({
      where: { id },
    });

    if (!temporada) {
      throw new NotFoundException('Temporada not found');
    }

    return temporada;
  }

  async findCapitulos(id: number) {
    const temporada = await this.prisma.temporadas.findUnique({
      where: { id },
      include: { capitulos: true },
    });

    if (!temporada) {
      throw new NotFoundException('Temporada not found');
    }

    return temporada.capitulos;
  }
}
