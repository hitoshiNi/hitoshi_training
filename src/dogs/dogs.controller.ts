import { Controller, Get, Res,Post,Body } from '@nestjs/common';
import { AppService_dogs } from './dogs.service';
import{Request,Response} from 'express';
import{CreateDogDto}from'./create-dog.dto';


@Controller('dogs')
export class DogsController {
    constructor(private readonly appService: AppService_dogs) {}
  @Get('1')
  getdogs(): string {
    return this.appService.getdogs();
  }
  @Get('2')
  get(@Res() res: Response) {
    return res.sendFile('index.html',{root:'./src/dogs'});
  }

}

