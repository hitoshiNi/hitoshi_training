
import { Controller, Get, Post,Param,Body ,Res} from '@nestjs/common';
import { CatsService } from './cats.service';
import{CreateCatDto}from'./create-cat.dto';
import{Request,Response} from 'express';

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
/*  @Get(':id')
  findOne(@Param() params): string {
  console.log(params.id);
  return `This action returns a ${params.id} cat`;
}
*/
　@Get('2')
　get(@Res() res: Response) {
  　return res.sendFile('cats.html',{root:'./src/html'});
}

  @Post('post')
  async create(@Body() createCatDto: CreateCatDto) {
  return 'This action adds a new cat';
}

}

