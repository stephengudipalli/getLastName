import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LastNameService {
  // private lastNameURL = 'http://someaddress.com/api';
  private lastNameURL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Error occurred:', error.error.message);
    } else {
      console.error(
        `Backend has returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something has happened, please try again later.');
  }

  getLastName() {
    return this.http.get(this.lastNameURL).pipe(
      catchError(this.handleError)
    );
  }

}
