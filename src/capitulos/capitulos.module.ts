import { Module } from '@nestjs/common';
import { CapitulosController } from './capitulos.controller';
import { CapitulosService } from './capitulos.service';

@Module({
  controllers: [CapitulosController],
  providers: [CapitulosService],
})
export class CapitulosModule {}
