import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../Services/authentication.service';

@Component({
  selector: 'app-stylistlogin',
  templateUrl: './stylistlogin.component.html',
  styleUrls: ['./stylistlogin.component.scss']
})
export class StylistloginComponent implements OnInit {
  details;
  checked = false;

  constructor( private auth: AuthenticationService ) { }

  ngOnInit() {
    this.details = this.auth.getUserDetails();
    this.auth.setUserDetails(this.details).subscribe(data =>{
      console.log(data)
      if(data == 'available'){
        return this.checked=true;
      }
      return this.checked=false;
    });
  }

}
