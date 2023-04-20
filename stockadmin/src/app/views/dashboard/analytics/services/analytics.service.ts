import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  environment = environment;
  constructor(private http: HttpClient) { }

  getAnalyticsData() {
    return this.http.get(`${environment.apiURL}/analytics`)
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
