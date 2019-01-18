import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salon',
  templateUrl: './salon.component.html',
  styleUrls: ['./salon.component.scss']
})
export class SalonComponent implements OnInit {
 showSpinner=true;
  jobs = [{
    name: 'HairCool Customs',
    distance:'5 km away',
    description:'An offer to hair dress  the groom and the crew on 22nd of January for pre shoots. ',
    payment:'250 USD',
    noOfBids:'12 bids per now',
    place:'Colombo,Sri lanka',
    postTime:'posted 10 mins bfr',
  },{
    name: 'HairCool Customs',
    distance:'5 km away',
    description:'An offer to hair dress  the groom and the crew on 22nd of January for pre shoots. ',
    payment:'250 USD',
    noOfBids:'12 bids per now',
    place:'Colombo,Sri lanka',
    postTime:'posted 10 mins bfr',
  },{
    name: 'HairCool Customs',
    distance:'5 km away',
    description:'An offer to hair dress  the groom and the crew on 22nd of January for pre shoots. ',
    payment:'250 USD',
    noOfBids:'12 bids per now',
    place:'Colombo,Sri lanka',
    postTime:'posted 10 mins bfr',
  },{
    name: 'HairCool Customs',
    distance:'5 km away',
    description:'An offer to hair dress  the groom and the crew on 22nd of January for pre shoots. ',
    payment:'250 USD',
    noOfBids:'12 bids per now',
    place:'Colombo,Sri lanka',
    postTime:'posted 10 mins bfr',
  },];

  mobileQuery: MediaQueryList;
  largeQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor( changeDetectorRef: ChangeDetectorRef, media: MediaMatcher ) { 
    this.mobileQuery = media.matchMedia('(max-width: 767px)');
    this.largeQuery = media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.largeQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.showSpinner=false;
  }

}
