import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-widget-main',
  templateUrl: './weather-widget-main.component.html',
  styleUrls: ['./weather-widget-main.component.css']
})
export class WeatherWidgetMainComponent implements OnInit {
  today: number = Date.now();
  WeatherData:any;  
  constructor() { }

  
  ngOnInit(){
    this.WeatherData = {
    main : {},
    isDay: true
  };
  this.getWeatherData();
  console.log(this.WeatherData);
  setInterval(()=>{
    this.today=Date.now();
    console.log(this.today);
  }, 1000);
}


  getWeatherData(){

    fetch('https://api.openweathermap.org/data/2.5/weather?q=toronto&&appid=c4736286702436493c5500b6a988a13d')
    .then(response=>response.json())
    .then(data=>{this.setWeatherData(data);})

   //let data = JSON.parse('{"coord":{"lon":-79.4163,"lat":43.7001},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"base":"stations","main":{"temp":276.09,"feels_like":272.4,"temp_min":274.46,"temp_max":276.81,"pressure":1014,"humidity":64},"visibility":10000,"wind":{"speed":4.12,"deg":110},"clouds":{"all":75},"dt":1648946156,"sys":{"type":2,"id":2043365,"country":"CA","sunrise":1648897035,"sunset":1648943089},"timezone":-14400,"id":6167865,"name":"Toronto","cod":200}');
    //this.setWeatherData(data);
  }
  
  setWeatherData(data: any){
    this.WeatherData = data;
    let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleDateString();
    let currentDate = new Date();
    this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
  }


  
}
