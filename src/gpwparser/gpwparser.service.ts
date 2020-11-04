import { Injectable } from '@nestjs/common';
import { formatISO } from 'date-fns';

@Injectable()
export class GpwParserService {
  parseDay(date: Date = new Date()) {
    return formatISO(date, { representation: 'date' });
  }
}
