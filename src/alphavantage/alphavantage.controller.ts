import { Controller, Get, Param } from '@nestjs/common';
import { AlphaVantageService } from './alphavantage.service';

@Controller('alpha')
export class AlphaVantageController {
  constructor(private readonly alphaVantageService: AlphaVantageService) {}
  @Get('/getEOD/:market/:symbol/:startDate?/:endDate?/')
  getEOD(@Param() params): any {
    return this.alphaVantageService.getEOD(
      params.market,
      params.symbol,
      params.startDate,
      params.endDate,
    );
  }

  @Get('/search/:query/')
  searchSymbol(@Param('query') query): any {
    return this.alphaVantageService.searchSymbol(query);
  }
}
