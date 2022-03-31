import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CodeBreakServiceService {

  private urlEndpoint: string = 'http://localhost:3000/api/code_breaker';
  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient, private router: Router) { }

  playCodeBreaker(number): Observable<any>{
    return this.http.get<any>(`${this.urlEndpoint}/${number}`);
  }

}
