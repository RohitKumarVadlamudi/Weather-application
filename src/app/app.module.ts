import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherWidgetMainComponent } from './Components/weather-widget-main/weather-widget-main.component';
import { AboutUSComponent } from './about-us/about-us.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { OurCustomersComponent } from './our-customers/our-customers.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    WeatherWidgetMainComponent,
    AboutUSComponent,
    OurServicesComponent,
    OurCustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
