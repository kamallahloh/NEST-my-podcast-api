import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { EpisodesService } from './episodes.service';
import { CreateEpisodeDto } from './dto/create-episode.dto';

@Controller('episodes') // the root Path
export class EpisodesController {
  // Dependency Injection
  // to inject a service into the controller we use the constructor /// where Nest.js will create an instance of the service and inject it.

  constructor(private episodesService: EpisodesService) {}

  @Get() // method decorator can accept arguments for nested root paths
  findAll(
    @Query('sort') /* arguments decorators */ sort: 'asc' | 'desc' = 'desc',
  ) {
    //return 'all episodes';
    return this.episodesService.findAll(sort);
  }

  @Get('featured')
  findFeatured() {
    //return 'featured episodes';
    return this.episodesService.findFeatured();
  }

  @Get(':id')
  findOne(@Param() id: string) {
    console.log(id);

    //return 'one episode';
    return this.episodesService.findOne(id);
  }

  @Post()
  //Create(@Body() input: any) {
  Create(@Body() input: CreateEpisodeDto) {
    console.log(input);

    //return 'new episode';
    return this.episodesService.create(input);
  }
}


//>>> REACHED HERE inject a service from another module