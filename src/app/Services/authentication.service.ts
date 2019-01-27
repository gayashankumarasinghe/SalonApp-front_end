import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { map, catchError, tap } from 'rxjs/operators';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthenticationService {

  authenticated = false;

  constructor( private http: HttpClient, private router: Router ) { }

  registerStylist(token:any): Observable<any>{
    return this.http.post('/salon/add',token);
  }

  searchQuery(token:any): Observable<any>{
    return this.http.post('/stylist/search',token)
  }

  setUserDetails(token:any): Observable<any>{
    return this.http.post('/salon/user-data',token);
  }

  getSalon(email:String): Observable<any>{
    return this.http.post('/salon/salon-details', email);
  }

  getStylist(email:String): Observable<any>{
    return this.http.post('/salon/stylist-details', email);
  }

  getSalonDetails(): Observable<any>{
    return this.http.get('/salon/all');
  }

  searchFreeDate(token:any): Observable<any>{
    return this.http.post('/api/booking/v1/check-booking',token)
  }

  bookingConfirm(token:any): Observable<any>{
    return this.http.post('/api/booking/v1/confirm-booking',token)
  }

  bookingBySalon(token:any): Observable<any>{
    return this.http.post('/api/booking/v1/check-status',token)
  }

  bookingForStylist(token:any): Observable<any>{
    return this.http.post('/api/booking/v1/check-booking',token)
  }

  acceptingBooking(token:any): Observable<any>{
    return this.http.post('/api/booking/v1/response-booking',token)
  }

  authentication(credentials, callback) {

    const headers = new HttpHeaders(credentials ? {
        authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});

    this.http.get('/api/login/user', {headers: headers}).subscribe(response => {
        if (response['name']) {
            this.authenticated = true;
        } else {
            this.authenticated = false;
        }
        return callback && callback();
    });
  }

  // logout() {
  //   this.http.post('logout', {}).finally(() => {
  //       this.authenticated = false;
  //       this.router.navigateByUrl('/');
  //   }).subscribe();
  // }

}
