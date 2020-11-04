import { Controller, Get, Param } from '@nestjs/common';
import { GpwParserService } from './gpwparser.service';

@Controller('parse')
export class GpwParserController {
  constructor(private readonly gpwParserService: GpwParserService) {}
  @Get(':date?')
  parseGpw(@Param('date') date): any {
    return this.gpwParserService.parseDay(date);
  }
}
