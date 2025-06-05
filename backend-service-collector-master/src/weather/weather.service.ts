import { Injectable } from '@nestjs/common';
import axios from 'axios';
import {  Get } from '@nestjs/common';
import { WeatherDataEntry } from "../WeatherDataEntry";

@Injectable()
export class WeatherService {

    private apiKey: string = 'ee24423e59bb6cb7f466b654036379e8';
    private baseUrl: string = 'https://api.openweathermap.org/data/2.5/weather';
    private collectionName = 'weatherData';
    private client = 'http://pocketbase:8090/api';


    async handleGetWeather(city: string): Promise<any> {
        console.log(city +"collector")
        const url = `${this.baseUrl}?q=${encodeURIComponent(city)}&appid=${this.apiKey}`;
        try {
            const response = await axios.get(url);
            const weatherData = {
                name: response.data.name,
                temperature: response.data.main.temp,
                weather: response.data.weather[0].main,
                description: response.data.weather[0].description,
                windSpeed: response.data.wind.speed,
            };
          //  const pocketbase = `${this.client}/collections/${this.collectionName}/records`;
            //await axios.post(pocketbase, new WeatherDataEntry(weatherData.name, weatherData.temperature, weatherData.weather, weatherData.description, weatherData.windSpeed));
            console.log(response)
            return weatherData;
        } catch (error) {
            console.error('API Error:', error.response.data )
            throw error;
        }
    }

}
