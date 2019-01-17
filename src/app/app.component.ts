import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';




export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isCollapsed = true;
  userCollapsed = true;
  wasClicked = false;
  userClicked = false;
  details: Object;
  animal?;
  openLogin=false;

  user:Object = {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    role: ''
  };

  firstNameFormControl = new FormControl('', [
    Validators.required,
  ]);
  lastNameFormControl = new FormControl('', [
    Validators.required,
  ]);
  userNameFormControl = new FormControl('', [
    Validators.required,
  ]);
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
  ]);
  confPasswordFormControl = new FormControl('', [
    Validators.required,
  ]);

  mobileQuery: MediaQueryList;
  largeQuery: MediaQueryList;
  transition: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(public dialog: MatDialog, private router: Router, private changeDetectorRef: ChangeDetectorRef, private media: MediaMatcher, public route: ActivatedRoute ) {

      this.mobileQuery = media.matchMedia('(max-width: 767px)');
      this.largeQuery = media.matchMedia('(max-width: 767px)');
      this.transition = media.matchMedia('(max-width: 767px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
      this.largeQuery.addListener(this._mobileQueryListener);
      this.transition.addListener(this._mobileQueryListener);
  }

  ngOnInit(){
    window.onscroll = function() { 
      let y = window.pageYOffset;
      if(y>50){
        document.getElementById("header").classList.add("darker");
      }
      else{
        document.getElementById("header").classList.remove("darker");

      }
    }
  }

  toggleMenu() {
    this.userCollapsed = true;
    this.userClicked = false;
    this.isCollapsed = !this.isCollapsed;
    this.wasClicked = !this.wasClicked;
  }

  
  toggleUser() {
    this.userCollapsed = !this.userCollapsed;
    this.userClicked = !this.userClicked;
  }

  getUserName(){
   
  }

  removeIt(){
    this.userCollapsed = true;
    this.userClicked = false;
  }

  notification() {
    setTimeout(() => {
      this.router.navigate(['notification']);
    }, 100);
  }

  users() {
    this.toggleUser();
    this.router.navigate(['user/personal-data']);
  }

  profilePic() {
    setTimeout(() => {
      this.router.navigate(['/']);
      this.toggleUser();
    }, 100);
  }

  howItWorks() {
    this.router.navigate(['dashboard']);
  }


  signUp() {
    this.router.navigate(['service']);
  }


  postAJob(){
    this.router.navigate(['pricing']);
  }

 
}
