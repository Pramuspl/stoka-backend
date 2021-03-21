import { QuandlService } from './quandl.service';
import { Module } from '@nestjs/common';
import { QuandlController } from './quandl.controller';

@Module({
  controllers: [QuandlController],
  providers: [QuandlService],
})
export class QuandlModule {}
