import { Module } from '@nestjs/common';
import { ConfigModule } from 'src/config/config.module';
import { EpisodesController } from './episodes.controller';
import { EpisodesService } from './episodes.service';

@Module({
    imports: [ConfigModule],
    controllers: [EpisodesController], // added by the CLI when generate controller
    providers: [EpisodesService]  // added by the CLI when generate service
})
export class EpisodesModule {}
