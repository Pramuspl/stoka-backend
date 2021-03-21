import { HttpService, Injectable } from '@nestjs/common';
import { format } from 'date-fns';
import alpha from 'alphavantage';
import { AlphaSearchDataset } from './alphavantage.service.interface';

@Injectable()
export class AlphaVantageService {
  alphavantage: any;
  constructor(private httpService: HttpService) {
    this.alphavantage = alpha({ key: process.env.ALPHA_VANTAGE_KEY });
  }
  async getEOD(
    market: string,
    symbol: string,
    startDate: string = format(new Date(), 'yyyy-MM-dd'),
    endDate: string = format(new Date(), 'yyyy-MM-dd'),
  ): Promise<any> {
    return await this.alphavantage.data.quote(`${symbol}.${market}`);
  }

  async searchSymbol(query: string): Promise<AlphaSearchDataset[]> {
    return await this.alphavantage.data.search(query);
  }
}
