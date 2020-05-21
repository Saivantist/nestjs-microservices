import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices'
import { AppService } from './app.service';
import { Observable } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    @Inject('MATH_SERVICE') private client: ClientProxy,
  ) { }

  async onApplicationBootstrap() {
    console.log('start connect');
    this.client.connect();
    console.log('connect successful');
  }

  @Get()
  accumulate(): Observable<number> {
    const pattern = { cmd: 'sum' };
    const payload = [1, 2, 3];
    console.log('aaa');
    return this.client.send<number>(pattern, payload);
  }

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

}
