import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {MessagePattern} from "@nestjs/microservices";
import {NotFoundException} from "@nestjs/common";



@Controller('list')
export class AppController {

  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'getTable' })
  async getWeather(): Promise<any> {
    try {
      return  await this.appService.handlGetTable();
    } catch (error) {
      throw new NotFoundException('City not found');
    }
  }
}
