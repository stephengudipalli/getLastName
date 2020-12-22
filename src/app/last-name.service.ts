import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LastNameService {
  private lastNameURL = 'http://someaddress.com/api';
  constructor(private http: HttpClient) { }

}
