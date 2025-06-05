import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  pingServiceA(city: string): Observable<any> {
    return this.httpService
        .get(`http://collector:3001/collector/city/${city}`)
        .pipe(map(response => response.data));
  }

  pingServiceB(): Observable<any> {
    return this.httpService.get('http://localhost:3001/list').pipe(map(response => response.data));
  }

  getHello(): string {
    return 'Hello World!';
  }
}
