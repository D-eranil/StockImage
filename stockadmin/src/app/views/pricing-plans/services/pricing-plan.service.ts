import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PricingPlanService {

  environment = environment;
  constructor(private http: HttpClient) { }

  getPricingPlansData() {
    return this.http.get(`${environment.apiURL}/pricing-plans`)
      .pipe(
        map((res: any) => { 
          return res;
        }),
        catchError((error) => {
          return throwError(() => new Error('something went wrong!'));
        })
      );
  }

  getPricingPlanById(plan_id: number) {
    return this.http.get(`${environment.apiURL}/pricing-plan`)
      .pipe(
        map((res: any) => { 
          return res;
        }),
        catchError((error) => {
          return throwError(() => new Error('something went wrong!'));
        })
      );
  }
}
