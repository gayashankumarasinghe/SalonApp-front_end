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
 rate;
 skills;
 city;
 date;
 rateChecker = 6;
 jobs=[];
  jobList = [{
    id:'001',
    name: 'HairCool Customs',
    distance:'5 km away',
    description:'An offer to hair dress  the groom and the crew on 22nd of January for pre shoots. ',
    payment:'250 USD',
    noOfBids:'12 bids per now',
    place:'Colombo,Sri lanka',
    postTime:'posted 10 mins bfr',
    rate: 5,
    skills: 'Barber',
    date: 'Sat Jan 19 2019'
  },{
    id:'002',
    name: 'HairCool Customs',
    distance:'250 km away',
    description:'An offer to hair dress  the groom and the crew on 22nd of January for pre shoots. ',
    payment:'4 USD',
    noOfBids:'12 bids per now',
    place:'Colombo,Sri lanka',
    postTime:'posted 10 mins bfr',
    rate: 4,
    skills: 'Barber',
    date: 'Sun Jan 20 2019'
  },{
    id:'003',
    name: 'HairCool Customs',
    distance:'250 km away',
    description:'An offer to hair dress  the groom and the crew on 22nd of January for pre shoots. ',
    payment:'3 USD',
    noOfBids:'12 bids per now',
    place:'Colombo,Sri lanka',
    postTime:'posted 10 mins bfr',
    rate: 3,
    skills: 'Makeup',
    date: 'Sat Jan 19 2019'
  },{
    id:'004',
    name: 'HairCool Customs',
    distance:'5 km away',
    description:'An offer to hair dress  the groom and the crew on 22nd of January for pre shoots. ',
    payment:'250 USD',
    noOfBids:'12 bids per now',
    place:'Colombo,Sri lanka',
    postTime:'posted 10 mins bfr',
    rate: 2,
    skills: 'DryCutting',
    date: 'Sun Jan 20 2019'
  },];

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

  salon(x){
    console.log(x);
  }

  searchUsingRate(){
    this.jobs=[];
    this.searchToken.rate= this.rate;
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
    
    
    // this.jobList.forEach(result=>{
    //   if(result.rate >= this.rate){
    //     return this.jobs.push(result);
    //   }
    // }) 
  }
  searchUsingSkills(){
    this.jobs=[];
    this.searchToken.skills= this.skills;
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
    
    
    // this.jobList.forEach(result=>{
    //   if(result.skills == this.skills){
    //     return this.jobs.push(result);
    //   }
    // }) 
  }
  searchUsingLocation(){
    this.jobs=[];
    this.searchToken.city= this.city;
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
    

    // this.jobList.forEach(result=>{
    //   if(result.rate >= this.rate){
    //     return this.jobs.push(result);
    //   }
    // }) 
  }
  // searchUsingDate(){
  //   this.jobs=[];
  //   this.searchToken.date= this.date.toDateString();
  //   console.log(this.searchToken);
  //   this.auth.searchQuery(this.searchToken).subscribe(result=>{
  //     result.forEach(element => {
  //       this.jobs.push(element);
  //     });
  //   })

  //   // this.jobList.forEach(result=>{
  //   //   if(result.date == this.date.toDateString()){
  //   //     return this.jobs.push(result);
  //   //   }
  //   // }) 
  // }


}
