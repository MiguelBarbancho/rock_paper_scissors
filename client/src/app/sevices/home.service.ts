import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';

@Injectable()
export class HomeService {
  public url: string;


  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  getOption(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url + '/', {headers: headers});
  }

}
