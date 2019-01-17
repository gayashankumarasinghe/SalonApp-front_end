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

import { AuthenticationService } from './Services/authentication.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StylistComponent } from './components/stylist/stylist.component';
import { CustomerComponent } from './components/customer/customer.component';


const appRoutes : Routes = [
  
    {path:'',component:DashboardComponent},
    {path:'stylist',component:StylistComponent},
    {path:'customer',component:CustomerComponent},
];



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StylistComponent,
    CustomerComponent
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
  providers: [ AuthenticationService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);