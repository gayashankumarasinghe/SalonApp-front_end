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
  stylistEmail?;
  bookingId;
  show=true;
  email={
    stylistEmail:''
  };

  

   bookings = [
    
    // {salon: 'Splendid',  date: '10th Feb 2019', city: 'Florida', street: 'York Street', telephone: '36553876'},
    // {salon: 'OneZero',  date: '18th Mar 2019', city: 'califonia', street: 'McWood street', telephone: '77257459'},
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
    this.auth.getStylist(this.stylistEmail).subscribe( result=>{
      result.forEach(element => {
        this.details = element
      });
    })
    this.auth.setUserDetails(this.details).subscribe(data =>{
      if(data == 'available'){
        return this.checked=true;
      }
      return this.checked=false;
    });
    
  }

 stylist(){
    //this.http.navigate(['stylist'])
  }

  Updatestylist(){
    
  }

  tempFunc(){
    this.bookings = [];
    this.email.stylistEmail = this.stylistEmail;
    this.auth.bookingForStylist(this.email).subscribe(result=>{
      try {
        result.forEach(element => {
          console.log(element)
          this.auth.getSalon(element.salonEmail).subscribe(salon=>{
            var dataUnit={
              Id:'',
              salon: '',
              date: '',
              city: '',
              street: '',
              website: ''
            }
            dataUnit.date = element.bookingDate;
            dataUnit.Id = element.id;
            dataUnit.salon = salon.name;
            dataUnit.city = salon.country;
            dataUnit.street = salon.street_address;
            dataUnit.website = salon.website;
            if(element.status =="accept" || element.status =="decline"){
              return null;
            }
            
            this.bookings.push(dataUnit);
          }, error=>{
            console.log("handled "+ error)
          });
        });
      } catch (error) {
        console.log("ExeptionHandled "+error)
      }
    }, error =>{
      console.error(error);
      
    }
    )
  }

  accept(id){
    var token ={
      bookingId:'',
      status:''
    }
    token.bookingId = id;
    token.status = "accept";
    this.auth.acceptingBooking(token).subscribe(result=>{
      try {
        console.log(result);
      } catch (error) {
        console.log(error);
      }
      
    });
    this.tempFunc();
    alert("You accepted the booking");

  }

  decline(id){
    var token ={
      bookingId:'',
      status:''
    }
    token.bookingId = id;
    token.status = "decline";
    this.auth.acceptingBooking(token).subscribe(result=>{
      try {
        console.log(result);
      } catch (error) {
        console.log(error);
      }
      
    });
    this.tempFunc();
    alert("You Declined the booking");
  }
}
