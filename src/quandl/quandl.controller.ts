import { Controller, Get, Param } from '@nestjs/common';
import { QuandlService } from './quandl.service';

@Controller('quandl')
export class QuandlController {
  constructor(private readonly quandlService: QuandlService) {}
  @Get('/getEOD/:market/:symbol/:startDate?/:endDate?/')
  getEOD(@Param() params): any {
    return this.quandlService.getEOD(
      params.market,
      params.symbol,
      params.startDate,
      params.endDate,
    );
  }

  @Get('/search/:query/')
  searchSymbol(@Param('query') query): any {
    return this.quandlService.searchSymbol(query);
  }
}
