import { Controller, Get } from '@nestjs/common';
import { AppService_dogs } from './dogs.service';

@Controller('dogs')
export class DogsController {
    constructor(private readonly appService: AppService_dogs) {}
  @Get()
  getdogs(): string {
    return this.appService.getdogs();
  }
}