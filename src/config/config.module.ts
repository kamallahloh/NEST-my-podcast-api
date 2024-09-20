import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';

@Module({
  providers: [ConfigService],
  exports: [ConfigService] // important after Nest g s Config // add it the the exports man import it in the episodeModule
})
export class ConfigModule {}
