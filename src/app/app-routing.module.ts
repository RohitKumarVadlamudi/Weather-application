import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUSComponent } from './about-us/about-us.component';
import { WeatherWidgetMainComponent } from './Components/weather-widget-main/weather-widget-main.component';
import { OurCustomersComponent } from './our-customers/our-customers.component';
import { OurServicesComponent } from './our-services/our-services.component';

const routes: Routes = [
  {path: '', component: WeatherWidgetMainComponent},
  {path: 'aboutus', component: AboutUSComponent},
  {path: 'ourservices', component: OurServicesComponent},
  {path: 'ourcustomers', component: OurCustomersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
