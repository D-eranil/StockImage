import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertService } from 'app/shared/services/alert/alert.service';
import { environment } from 'environments/environment';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WhatWeProvideService {
  constructor(private http: HttpClient, private alertService: AlertService) { }

  getWhatWeProvideData() {
    return this.http.get(`${environment.apiURL}/get-what-we-provide`)
    .pipe(
      map((res: any) => {                    
        return res;
      }),
      catchError((error) => {    
        const errorMessage = 'something went wrong!';
        this.alertService.error(errorMessage); 
        return throwError(() => new Error(errorMessage));
      })                    
    );
  }

  updateWhatWeProvide(body) {
    return this.http.post(`${environment.apiURL}/update-what-we-provide`, body)
      .pipe(
        map((res: any) => {    
          this.alertService.success(res.message); 
        }),
        catchError((error) => {    
          const errorMessage = 'something went wrong!';
          this.alertService.error(errorMessage); 
          return throwError(() => new Error(errorMessage));
        })                    
      );
  }
}
