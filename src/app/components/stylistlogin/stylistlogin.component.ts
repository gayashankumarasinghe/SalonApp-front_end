import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../Services/authentication.service';
import { StylistService } from '../../Services/stylist.service';
import {Sort} from '@angular/material';

import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

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

  facebookFormControl = new FormControl('', [
    Validators.required,
  ]);
  websiteFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  descriptionFormControl = new FormControl('', [
    Validators.required,
  ]);

  constructor( private auth: AuthenticationService ) { }

  ngOnInit() {
    this.auth.getSalonDetails().subscribe( result=>{
      console.log(result);
      result.forEach(element => {
        this.details = element
      });
    })
    this.auth.setUserDetails(this.details).subscribe(data =>{
      console.log(data)
      if(data == 'available'){
        return this.checked=true;
      }
      return this.checked=false;
    });
  }

 stylist(){
    //this.http.navigate(['stylist'])
  }

}
