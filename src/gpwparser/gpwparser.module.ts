import { GpwParserService } from './gpwparser.service';
import { Module } from '@nestjs/common';
import { GpwParserController } from './gpwparser.controller';

@Module({
  imports: [],
  controllers: [GpwParserController],
  providers: [GpwParserService],
})
export class GPWParserModule {}
