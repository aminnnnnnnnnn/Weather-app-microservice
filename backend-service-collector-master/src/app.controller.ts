// AppController
import { Controller, Get, Param } from '@nestjs/common';
import { WeatherService } from './weather/weather.service';
import {NotFoundException} from "@nestjs/common";



@Controller('collector')
export class AppController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get('city/:city')
  async getWeather(@Param('city') city : string): Promise<any> {
    try {

      return  await this.weatherService.handleGetWeather(city);
    } catch (error) {
      throw new NotFoundException('City not found');
    }
  }
}
