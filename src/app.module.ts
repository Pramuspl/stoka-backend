import { GPWParserModule } from './gpwparser/gpwparser.module';
import { AlphaVantageModule } from './alphavantage/alphavantage.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { QuandlModule } from './quandl/quandl.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GPWParserModule,
    AlphaVantageModule,
    QuandlModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
