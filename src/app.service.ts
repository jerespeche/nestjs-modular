import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(@Inject('API_KEY') private apiKey: string) {}
  getHello(): string {
    return `${this.apiKey}`;
  }
}
