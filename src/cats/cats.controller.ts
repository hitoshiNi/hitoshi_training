import { Controller, Get } from '@nestjs/common';
import { AppService_cats } from './cats.service';

@Controller('cats')
export class CatsController {
    constructor(private readonly appService: AppService_cats) {}
  @Get()
  getcats(): string {
    return this.appService.getCats();
  }

}

