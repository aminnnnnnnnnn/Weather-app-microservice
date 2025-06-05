export class WeatherData {
  description: string ='';
  name: string='';
  temperature: number=0;
  weather: string='';
  windSpeed: number=0;
  constructor() {
    this.description='';
    this.temperature=0;
    this.name='';
    this.weather= '';
    this.windSpeed=0;
  }
}
interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}
