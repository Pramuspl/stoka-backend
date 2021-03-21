import { AlphaVantageService } from './alphavantage.service';
import { HttpModule, Module } from '@nestjs/common';
import { AlphaVantageController } from './alphavantage.controller';

@Module({
  imports: [HttpModule],
  controllers: [AlphaVantageController],
  providers: [AlphaVantageService],
})
export class AlphaVantageModule {}
