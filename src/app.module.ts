import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import{CatsController}from'./cats/cats.controller';
import { AppService_cats } from './cats/cats.service';
import{DogsController}from'./dogs/dogs.controller';
import { AppService_dogs } from './dogs/dogs.service';

@Module({
  imports: [],
  controllers: [AppController,CatsController,DogsController],
  providers: [AppService,AppService_cats,AppService_dogs],
})
export class AppModule {}
