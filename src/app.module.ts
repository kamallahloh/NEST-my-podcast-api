import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EpisodesModule } from './episodes/episodes.module';
import { TopicsModule } from './topics/topics.module';
import { ConfigModule } from './config/config.module';

// This is a decorator function that takes a config object as a param.
// The Module is the building blocks of Nest.js // here our RootModule is the app.module 
// create Module using Nest CLI write >> nest generate module episodes >>
@Module({
  imports: [EpisodesModule, TopicsModule/*, ConfigModule*/], // ^ all created module will be added here // and any subModule will be part of the project if added to one of the imported modules.
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
