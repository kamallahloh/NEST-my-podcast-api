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
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { EpisodesService } from './episodes.service';
import { CreateEpisodeDto } from './dto/create-episode.dto';
import { ConfigService } from 'src/config/config.service';
import { error } from 'console';
import { IsPositivePipe } from 'src/pipes/is-positive.pipe';
import { ApiKeyGuard } from 'src/guards/api-key.guard';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

// apply the Guard
//@UseGuards(ApiKeyGuard) // here the guard is control the access to all routes in the episode path

@ApiTags('episodes') // to group endpoint in swagger http://localhost:3000/api
@Controller('episodes') // the root Path
export class EpisodesController {
  // Dependency Injection
  // to inject a service into the controller we use the constructor /// where Nest.js will create an instance of the service and inject it.

  constructor(
    private episodesService: EpisodesService,
    private configServices: ConfigService,
  ) {}

  @Get() // method decorator can accept arguments for nested root paths
  @ApiOperation({ summary: 'Fetch a list of all episodes' })
  @ApiResponse({
    status: 200,
    description: 'list of episodes fetched successfully',
    type: CreateEpisodeDto,
    isArray: true,
  })
  /*@ApiOkResponse({
    description: 'list of episodes fetched successfully',
  })*/
  @ApiNotFoundResponse({
    description: 'episodes not found',
  })
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

  @UseGuards(ApiKeyGuard) // here the guard is control the access to only the create handler
  @Post()
  @ApiOperation({ summary: 'create a new episode' })
  @ApiCreatedResponse({
    description: 'created',
    type: CreateEpisodeDto,
    isArray: true,
  })
  @ApiBadRequestResponse({
    description: 'Invalid data provided',
  })
  //Create(@Body() input: any) {
  Create(@Body(ValidationPipe) input: CreateEpisodeDto) {
    console.log(input);

    //return 'new episode';
    return this.episodesService.create(input);
  }
}
