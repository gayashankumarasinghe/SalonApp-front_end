import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { RouterModule, Routes }from '@angular/router';
import { MaterialModule } from './modules/material.module';
import { Observable } from 'rxjs/Observable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';

//services imports
import { AuthenticationService } from './Services/authentication.service';
import { SalonService } from './services/salon.service';
import { StylistService } from './services/stylist.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StylistComponent } from './components/stylist/stylist.component';
import { CustomerComponent } from './components/customer/customer.component';
import { SalonComponent } from './components/salon/salon.component';
import { StylistloginComponent } from './components/stylistlogin/stylistlogin.component';
import { SalonloginComponent } from './components/salonlogin/salonlogin.component';


const appRoutes : Routes = [
  
    {path:'',component:DashboardComponent},
    {path:'get-stylists',component:StylistComponent},
    {path:'customer',component:CustomerComponent},
    {path:'get-salons',component:SalonComponent},
    {path:'salonlogin',component:SalonloginComponent},
    {path:'stylistlogin',component:StylistloginComponent},
];



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StylistComponent,
    CustomerComponent,
    SalonComponent,
    StylistloginComponent,
    SalonloginComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ AuthenticationService,SalonService,StylistService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);