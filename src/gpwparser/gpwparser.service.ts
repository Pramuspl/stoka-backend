import { HttpService, Injectable } from '@nestjs/common';
import { format } from 'date-fns';
import { read, utils } from 'xlsx';

@Injectable()
export class GpwParserService {
  constructor(private httpService: HttpService) {}
  async parseDay(date: string = format(new Date(), 'dd-MM-yyyy')) {
    const res = await this.httpService
      .get(
        `https://www.gpw.pl/archiwum-notowan?fetch=1&type=10&instrument=&date=${date}`,
        { responseType: 'arraybuffer' },
      )
      .toPromise();
    const data = new Uint8Array(res.data);
    const workbook = read(data, { type: 'array' }).Sheets.Worksheet;
    const json = utils.sheet_to_json(workbook);
    return json;
  }

  async test() {
    const res = await this.httpService
      .get('https://reqbin.com/echo')
      .toPromise();
    return res.data;
  }
}
