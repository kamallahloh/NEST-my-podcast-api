import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('episodes') // the root Path
export class EpisodesController {
  @Get() // method decorator can accept arguments for nested root paths
  findAll(
    @Query('sort') /* arguments decorators */ sort: 'asc' | 'desc' = 'desc',
  ) {
    return 'all episodes';
  }

  @Get('featured')
  findFeatured() {
    return 'featured episodes';
  }

  @Get(':id')
  findOne(@Param() id: string) {
    console.log(id);
    
    return 'one episode';
  }

  @Post()
  Create(@Body() input: any) {
    console.log(input);

    return 'new episode';
  }
}
