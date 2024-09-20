import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  HttpException,
  HttpStatus,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { EpisodesService } from './episodes.service';
import { CreateEpisodeDto } from './dto/create-episode.dto';
import { ConfigService } from 'src/config/config.service';
import { error } from 'console';
import { IsPositivePipe } from 'src/pipes/is-positive.pipe';

@Controller('episodes') // the root Path
export class EpisodesController {
  // Dependency Injection
  // to inject a service into the controller we use the constructor /// where Nest.js will create an instance of the service and inject it.

  constructor(
    private episodesService: EpisodesService,
    private configServices: ConfigService,
  ) {}

  @Get() // method decorator can accept arguments for nested root paths
  findAll(
    @Query('sort') /* arguments decorators */ sort: 'asc' | 'desc' = 'desc',
    @Query('limit', new DefaultValuePipe(100), ParseIntPipe, IsPositivePipe)
    limit: number,
    // Search for Built-in Pipes in Nest.js
    // ParseIntPipe validate if the query parameter is present .
    // new DefaultValuePipe(100) is validate if it's a valid integer.
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
  async findOne(@Param() id: string) {
    console.log(id);

    const episode = await this.episodesService.findOne(id);
    if (!episode) {
      //throw new HttpException('Episode not found', HttpStatus.NOT_FOUND);
      throw new NotFoundException('Episode not found');
    }
    //return 'one episode';
    return this.episodesService.findOne(id);
  }

  @Post()
  //Create(@Body() input: any) {
  Create(@Body(ValidationPipe) input: CreateEpisodeDto) {
    console.log(input);

    //return 'new episode';
    return this.episodesService.create(input);
  }
}

