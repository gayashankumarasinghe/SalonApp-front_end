import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../Services/authentication.service';
import {Sort} from '@angular/material';

@Component({
  selector: 'app-stylistlogin',
  templateUrl: './stylistlogin.component.html',
  styleUrls: ['./stylistlogin.component.scss']
})
export class StylistloginComponent implements OnInit {
  details;
  checked = false;

   bookings = [
    {salon: 'Frozen yogurt', date: '159', city: '6', street: '24', telephone: '4'},
    {salon: 'Ice cream sandwich',  date: '237', city: '9', street: '37', telephone: '4'},
    {salon: 'Eclair',  date: '262', city: '16', street: '24', telephone: '6'},
    //{name: 'Cupcake', calories: '305', fat: '4', carbs: '67', protein: '4'},
    //{name: 'Gingerbread', calories: '356', fat: '16', carbs: '49', protein: '4'},
  ];

  constructor( private auth: AuthenticationService ) { }

  ngOnInit() {
    this.details = this.auth.getUserDetails();
    this.details={
      firstName:'Gayashan',
      lastName:'Kumarasinghe',
      userName:'Gayashan',
      email:'gayashankaushallya@gmail.com',
      role: 'stylist'
    }
    this.auth.setUserDetails(this.details).subscribe(data =>{
      console.log(data)
      if(data == 'available'){
        return this.checked=true;
      }
      return this.checked=false;
    });
  }

}
