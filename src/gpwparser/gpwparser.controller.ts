import { Controller, Get } from '@nestjs/common';
import { GpwParserService } from './gpwparser.service';

@Controller()
export class GpwParserController {
  constructor(private readonly gpwParserService: GpwParserService) {}
  @Get('date')
  parseGpw(): string {
    return this.gpwParserService.parseDay();
  }
}
