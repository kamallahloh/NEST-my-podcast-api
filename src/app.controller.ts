import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

// controllers to handle any incoming requests // the entry point //
// create Controller using Nest CLI write >> nest generate controller episodes >> nest g c episodes
@ApiTags('topics')
@Controller('topics') // Class decorator
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
