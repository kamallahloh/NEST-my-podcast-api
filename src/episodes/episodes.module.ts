import { Module } from '@nestjs/common';
import { ConfigModule } from 'src/config/config.module';
import { EpisodesController } from './episodes.controller';
import { EpisodesService } from './episodes.service';
import { ConfigService } from 'src/config/config.service';

@Module({
    imports: [ConfigModule, ConfigService], // import here before inject it in the episode controller or any class inside the episodeModule like service.
    controllers: [EpisodesController], // added by the CLI when generate controller
    providers: [EpisodesService]  // added by the CLI when generate service
})
export class EpisodesModule {}
