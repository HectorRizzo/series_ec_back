import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CapitulosService {
  constructor(private readonly prisma: PrismaService) {}

  async findOne(id: number) {
    const capitulo = await this.prisma.capitulos.findUnique({
      where: { id },
    });

    if (!capitulo) {
      throw new NotFoundException('Capitulo not found');
    }

    return capitulo;
  }
}
