import { GpwParserService } from './gpwparser.service';
import { HttpModule, Module } from '@nestjs/common';
import { GpwParserController } from './gpwparser.controller';

@Module({
  imports: [HttpModule],
  controllers: [GpwParserController],
  providers: [GpwParserService],
})
export class GPWParserModule {}
