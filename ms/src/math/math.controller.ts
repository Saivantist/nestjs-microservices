import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, MicroserviceOptions } from '@nestjs/microservices';
import { Observable, from } from 'rxjs';

@Controller('math')
export class MathController {
  @MessagePattern({ cmd: 'sum' })
  accumulate(data: number[]): number {
    console.log('Get it');
    return (data || []).reduce((a, b) => a + b);
  }

  // @MessagePattern({cmd: 'sum'})
  // async accumulate(data: number[]): Promise<number> {
  //   return (data || []).reduce((a,b) => a + b);
  // }

  // @MessagePattern({ cmd: 'sum' })
  // accumulate(data: number[]): Observable<number> {
  //   return from([1, 2, 3]);
  // }

  // @EventPattern('user_created')
  // async handleUserCreated(data: Record<string, unknown>) {
  //   //bussiness logic
  // }

}
