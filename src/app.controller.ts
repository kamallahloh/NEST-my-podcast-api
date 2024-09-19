import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// controllers to handle any incoming requests // the entry point //
// create Controller using Nest CLI write >> nest generate controller episodes >>
@Controller() // Class decorator 
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
