import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../Services/authentication.service';


@Component({
  selector: 'app-salon',
  templateUrl: './salon.component.html',
  styleUrls: ['./salon.component.scss']
})
export class SalonComponent implements OnInit {
 showSpinner=true;
 searchToken={
   rate:null,
   skills:null,
   city:null
 };


 checkToken={
   stylistEmail:''
 };


 confirmToken={
   stylistEmail:'',
   salonEmail:'',
   bookingDate:''
 };


 disableDates:Date[]=[];


 rate;
 skills;
 city;
 date;
 stylistEmail;
 salonEmail;

 rateChecker = 6;
 bookingSuccessMessage?;


 jobs=[];

  myFilter2= (d: Date): boolean => {
    var date = new Date();
    date.setDate(date.getDate());
    for(var i = 0; i < this.disableDates.length; i++){
      if((this.disableDates[i].getDate()==d.getDate() && this.disableDates[i].getMonth()==d.getMonth() && this.disableDates[i].getFullYear()==d.getFullYear())  || date>=d){
        return false;
      }
    } 
    return true;
  }

  mobileQuery: MediaQueryList;
  largeQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor( changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public auth: AuthenticationService ) { 
    this.mobileQuery = media.matchMedia('(max-width: 767px)');
    this.largeQuery = media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.largeQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.showSpinner=false;
  }

  checkAvailability(email){
    this.disableDates = [];
    this.stylistEmail = email;
    this.checkToken.stylistEmail = this.stylistEmail;
    console.log(this.checkToken)
    this.auth.searchFreeDate(this.checkToken).subscribe(result=>{
      try {
      result.forEach(element => {
        var date = new Date(element.bookingDate);
        this.disableDates.push(date)
        console.log(this.disableDates)
      });
    }
    catch(error){
      console.log("my error")
    }
    })
  }

  searchUsingRate(){
    this.jobs=[];
    this.searchToken.rate= this.rate;
    if(this.rate==0){
      this.searchToken.rate=null;
    }
    console.log(this.searchToken)
    try {
      this.auth.searchQuery(this.searchToken).subscribe(result=>{
        try {
          result.forEach(element => {
            this.jobs.push(element);
          })
        } catch (error) {
          console.log("Error encountered\n"+error);
        }
      },error=>{
          console.log("No search results found\n"+error);
      });
    } catch (error) {
      console.log("Error encountered\n"+error);
    }
  }


  searchUsingSkills(){
    this.jobs=[];
    this.searchToken.skills= this.skills;
    if(this.skills==undefined){
      this.searchToken.skills=null;
    }
    console.log(this.searchToken)
    try {
      this.auth.searchQuery(this.searchToken).subscribe(result=>{
        try {
          result.forEach(element => {
            this.jobs.push(element);
          })
        } catch (error) {
          console.log("Error encountered\n"+error);
        }
      }, error=>{
        console.log("No search results found\n"+error)
      });
    } catch (error) {
      console.log("Error encountered\n"+error)
    }
  }


  searchUsingLocation(){
    this.jobs=[];
    this.searchToken.city= this.city;
    if(this.city==undefined){
      this.searchToken.city=null;
    }
    try {
      this.auth.searchQuery(this.searchToken).subscribe(result=>{
        try {
          result.forEach(element => {
            this.jobs.push(element);
          })
        } catch (error) {
          console.log("Error encountered\n"+error);
        }
      },error=>{
          console.log("No search results found\n"+error);
      });
    } catch (error) {
      console.log("Error encountered\n"+error);
    }
     
  }
  
  confirmFunction(){
    this.confirmToken.stylistEmail = this.stylistEmail;
    this.confirmToken.salonEmail = this.salonEmail;
    this.confirmToken.bookingDate = this.date;

    this.auth.bookingConfirm(this.confirmToken).subscribe(result=>{
      try {
        this.bookingSuccessMessage = result;
      } catch (error) {
        this.bookingSuccessMessage = error;
      }
      
    },error=>{
      this.bookingSuccessMessage = error;
    });

    this.checkAvailability(this.stylistEmail);
  }

  checkFunction(){
    console.log(this.date)
  }

}
