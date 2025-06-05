import {Component} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {DataService} from "../data.service";
import { HttpClient } from '@angular/common/http';
import {Backend} from "../backend";
import {WeatherData} from "./WeatherEntry";


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  public location :string="";
  public main_dec : string ="";
  public temp : number=0;
  public wind_speed : number =0;

  constructor(private modalService: NgbModal , public dataService : DataService, private backend: Backend) {
  }
  public weatherResponse!: WeatherData ;    // Store the response from the backend

  public setLocation (location : string) :void{
    this.location = location;
    console.log(this.location)
    this.backend.sendReq(location).subscribe((response : WeatherData)=>{
      this.weatherResponse = response;
      console.log(this.weatherResponse);
    }),
      (error: any) => {
        console.log(error);
      };
  }



}
