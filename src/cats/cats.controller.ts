
import { Controller, Get, Post,Param,Body } from '@nestjs/common';
import { CatsService } from './cats.service';
import{CreateCatDto}from'./create-cat.dto';

@Controller('cats')
export class CatsController {

  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }

  @Get('ab*cd')
  findAll_1() {
  return 'This route uses a wildcard';
}
  @Get(':id')
  findOne(@Param() params): string {
  console.log(params.id);
  return `This action returns a ${params.id} cat`;
}
  @Post('post')
  async create(@Body() createCatDto: CreateCatDto) {
  return 'This action adds a new cat';
}

}

