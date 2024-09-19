import { Module } from '@nestjs/common';
import { ConfigModule } from 'src/config/config.module';
import { EpisodesController } from './episodes.controller';

@Module({
    imports: [ConfigModule],
    controllers: [EpisodesController] // added by the CLI when generate controller 
})
export class EpisodesModule {}
