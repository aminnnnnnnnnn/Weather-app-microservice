import { Injectable } from '@nestjs/common';
import axios from 'axios';
import {WeatherDataEntry} from "./data";

@Injectable()
export class AppService {
  private collectionName = 'weatherData';
  private client = 'http://localhost:8090/api';

  async handlGetTable(): Promise<any> {
    try {
      const pocketbase = `${this.client}/collections/${this.collectionName}/records`;

      const response = await axios.get(pocketbase);
      const weatherData: WeatherDataEntry[] = response.data.items.map((item: any) => ({
        name: item.name,
        temp: item.temp,
        main: item.main,
        description: item.description,
      }));

      console.log(weatherData);
      return weatherData;
    } catch (error) {
      console.error('API Error:', error.response.data);
      throw error;
    }
  }
}
