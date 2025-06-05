import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class Backend {
  private baseUrl = 'http://localhost:3000/gateway';

  constructor(private httpClient: HttpClient) {
  }

  public sendReq(city: string): Observable<any> {
    const url = `${this.baseUrl}/weather/${city}`;
    return  this.httpClient.get(url);

  }
}
