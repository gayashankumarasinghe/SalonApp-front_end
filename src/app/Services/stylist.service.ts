import { Injectable } from '@angular/core';
//import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError, tap } from 'rxjs/operators';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class StylistService {

  constructor(private http: HttpClient) { }

  setStylistDetails(token:any): Observable<any>{
    return this.http.post('/stylist/update',token);
  }

  getStylistDetails(): Observable<any>{
    return this.http.get('/stylist/all');
  }

}
