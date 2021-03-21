import { Injectable } from '@nestjs/common';
import { format } from 'date-fns';
import Quandl from 'quandl';
import {
  QuandlEODDataset,
  QuandlSearchDataset,
} from './quandl.service.interface';
import { promisify } from 'util';

@Injectable()
export class QuandlService {
  quandl: Quandl;
  dataset: any;
  search: any;
  constructor() {
    this.quandl = new Quandl({ auth_token: process.env.QUANDL_KEY });
    this.dataset = promisify(this.quandl.dataset.bind(this.quandl));
    this.search = promisify(this.quandl.search.bind(this.quandl));
  }

  async getEOD(
    market: string,
    symbol: string,
    startDate: string = format(new Date(), 'yyyy-MM-dd'),
    endDate: string = format(new Date(), 'yyyy-MM-dd'),
  ): Promise<QuandlEODDataset> {
    const result = JSON.parse(
      await this.dataset(
        {
          source: market,
          table: symbol,
        },
        {
          order: 'asc',
          start_date: startDate,
          end_date: endDate,
        },
      ),
    );

    if (result.quandl_error) {
      return result.quandl_error;
    }

    return (({
      dataset_code,
      database_code,
      name,
      newest_available_date,
      oldest_available_date,
      start_date,
      end_date,
      data,
      order,
    }) => ({
      dataset_code,
      database_code,
      name,
      newest_available_date,
      oldest_available_date,
      start_date,
      end_date,
      data,
      order,
    }))(result.dataset);
  }

  async searchSymbol(query: string): Promise<QuandlSearchDataset[]> {
    const result = JSON.parse(await this.search(query));

    return result.datasets.map((item: QuandlSearchDataset) => {
      return {
        dataset_code: item.dataset_code,
        database_code: item.database_code,
        name: item.name,
      };
    });
  }
}
