import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService_dogs {
  getdogs(): string {
    return 'Dogs one one';
  }
}