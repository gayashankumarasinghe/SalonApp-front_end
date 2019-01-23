import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError, tap } from 'rxjs/operators';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';



@Injectable()
export class SalonService {

  constructor( private http: HttpClient) { }

  public getAllSalons() {
    //return this.http.get<User[]>(this.userUrl);
    return this.http.get('salon/all');
  }

   public updateSalon(salonId) {
    //return this.http.get<User[]>(this.userUrl);
    return this.http.get('salon/all');
  }





}
