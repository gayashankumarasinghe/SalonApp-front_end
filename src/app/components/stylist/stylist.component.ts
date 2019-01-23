import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

import { AuthenticationService } from '../../Services/authentication.service';


@Component({
  selector: 'app-stylist',
  templateUrl: './stylist.component.html',
  styleUrls: ['./stylist.component.scss']
})
export class StylistComponent implements OnInit {
  showSpinner=true;
  // jobs = [{
  //   name: 'HairCool Customs',
  //   distance:'5 km away',
  //   description:'An offer to hair dress  the groom and the crew on 22nd of January for pre shoots. ',
  //   payment:'250 USD',
  //   //noOfBids:'12 bids per now',
  //   place:'Colombo,Sri lanka',
  //   postTime:'posted 10 mins bfr',
  // },{
  //   name: 'HairCool Customs',
  //   distance:'5 km away',
  //   description:'An offer to hair dress  the groom and the crew on 22nd of January for pre shoots. ',
  //   payment:'250 USD',
  //   //noOfBids:'12 bids per now',
  //   place:'Colombo,Sri lanka',
  //   postTime:'posted 10 mins bfr',
  // },{
  //   name: 'HairCool Customs',
  //   distance:'5 km away',
  //   description:'An offer to hair dress  the groom and the crew on 22nd of January for pre shoots. ',
  //   payment:'250 USD',
  //   //noOfBids:'12 bids per now',
  //   place:'Colombo,Sri lanka',
  //   postTime:'posted 10 mins bfr',
  // },{
  //   name: 'HairCool Customs',
  //   distance:'5 km away',
  //   description:'An offer to hair dress  the groom and the crew on 22nd of January for pre shoots. ',
  //   payment:'250 USD',
  //  // noOfBids:'12 bids per now',
  //   place:'Colombo,Sri lanka',
  //   postTime:'posted 10 mins bfr',
  // },];

  jobs=[];

  mobileQuery: MediaQueryList;
  largeQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor( changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private auth: AuthenticationService ) { 
    this.mobileQuery = media.matchMedia('(max-width: 767px)');
    this.largeQuery = media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.largeQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.showSpinner=false;
    this.auth.getSalonDetails().subscribe(result=>{
      result.forEach(element=>{
        this.jobs.push(element)
      })
    })
  }

 
}