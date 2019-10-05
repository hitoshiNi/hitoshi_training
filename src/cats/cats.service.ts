import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService_cats {
  getCats(): string {
    return 'Cats nyan';
  }
}