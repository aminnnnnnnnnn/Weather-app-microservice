import { Controller, Get, Param } from '@nestjs/common';
import { Observable } from 'rxjs';
import {AppService} from "./app.service";
import axios from 'axios';

@Controller('gateway')
export class AppController {

  constructor(private readonly appService: AppService) {}
  @Get('weather/:city')
  getWeather(@Param('city') city:string): Observable<any> {
    console.log(city)
    return  this.appService.pingServiceA(city);



  }

  @Get('/list')
  getlist() :Observable<any>{
    console.log("")
    return this.appService.pingServiceB();
  }



  
  @Get('hello')
  getHello(): string {
    return 'Hello World!';
  }
}
