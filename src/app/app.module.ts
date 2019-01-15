import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes }from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpSaloonComponent } from './components/sign-up-saloon/sign-up-saloon.component';
import { SignUpStylistComponent } from './components/sign-up-stylist/sign-up-stylist.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const appRoutes : Routes = [
  
    {path:'',component:DashboardComponent},
    {path:'login',component:LoginComponent},
];



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignUpSaloonComponent,
    SignUpStylistComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
