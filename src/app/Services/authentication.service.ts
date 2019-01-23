import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError, tap } from 'rxjs/operators';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthenticationService {

  constructor( private http: HttpClient ) { }

  registerStylist(token:any): Observable<any>{
    return this.http.post('/salon/add',token);
  }

  searchQuery(token:any): Observable<any>{
    return this.http.post('/salon/all',token)
  }

  setUserDetails(token:any): Observable<any>{
    return this.http.post('/salon/user-data',token);
  }

  getUserDetails(): Observable<any>{
    return this.http.get('/salon/all');
  }

}
