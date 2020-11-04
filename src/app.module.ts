import { GPWParserModule } from './gpwparser/gpwparser.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [GPWParserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
