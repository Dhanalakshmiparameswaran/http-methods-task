import { Module } from '@nestjs/common';
import { FestivalService } from './app.service';
import { FestivalController } from './app.controller';
import { HttpModule } from '@nestjs/axios';
import { CustomLoggerService } from './logger.service';

@Module({
  imports: [HttpModule],
  controllers: [FestivalController],
  providers: [FestivalService, CustomLoggerService],
})
export class AppModule {}
